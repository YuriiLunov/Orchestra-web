import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

const BlogInnerView = ({ post, isLoaded, imgUrl, formatDate }) => {
  return (
    <MainLayout>
      <div className="secondary-bg blog__inner">
        {isLoaded ? (
          <div>
            <p className="blog__inner__date">
              Дата публікації: {formatDate(post.date)}
            </p>
            <h1 className="medium-title">{post.title.rendered}</h1>
            <div className="image">
              {imgUrl ? <img src={imgUrl} alt={post.title.rendered} /> : ''}
            </div>
            <p
              className="blog__inner__text"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            <div className="back-link">
              <NavLink to="/blog" className="prim-btn back">
                <i className="fa fa-arrow-circle-o-left" aria-hidden="true" />
                Назад
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="loader" />
        )}
      </div>
    </MainLayout>
  );
};

BlogInnerView.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.string,
    }),
    date: PropTypes.string,
    content: PropTypes.shape({
      rendered: PropTypes.string,
    }),
  }).isRequired,
  imgUrl: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  formatDate: PropTypes.func.isRequired,
};

export default BlogInnerView;
