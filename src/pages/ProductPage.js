import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import merchandises from '../data/merchandises';
import '../css/App.css';
import '../css/ProductPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useComment } from '../contexts/CommentContext';

const ProductPage = () => {
  const { id } = useParams();
  const [merchandise, setMerchandise] = useState(null);
  const { comments, addComment, inputComment, setInputComment } = useComment();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
        await delay(1000);

        const selectedMerchandise = merchandises.find((item) => item.id === parseInt(id, 10));

        if (selectedMerchandise) {
          setMerchandise(selectedMerchandise);
        } else {
          setMerchandise(null);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  useEffect(() => {
    console.log('Comment added:', inputComment);
  }, [inputComment]);

  const handleCommentChange = (e) => {
    setInputComment(e.target.value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    addComment();
  };

  if (isLoading) {
    return <div className="product-container">Loading...</div>;
  }

  if (error) {
    return <div className="product-container">Error: {error}</div>;
  }

  if (!merchandise) {
    return <div className="product-container">Product not found</div>;
  }

  return (
    <>
      <Header />
      <div className="product-container">
        <h2>{merchandise.name}</h2>
        <p>Ціна: {merchandise.price}</p>
        <p>Опис товару: {merchandise.descriptions}</p>

        <div className="comments-container">
          <h3>Comments</h3>
          <ul className="comments-list">
            {comments.map((comment, index) => (
              <li key={`comment-${index}`} className="comment-item">
                {comment}
              </li>
            ))}
          </ul>

          <form onSubmit={handleAddComment}>
            <label>
              Add a comment:
              <input
                type="text"
                value={inputComment}
                onChange={handleCommentChange}
                className="comment-input"
              />
            </label>
            <button type="submit" className="comment-btn">
              Add Comment
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;