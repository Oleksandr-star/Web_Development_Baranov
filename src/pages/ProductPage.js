import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import merchandises from '../data/merchandises';
import '../css/App.css';
import '../css/ProductPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage = () => {
  const { id } = useParams();
  const [merchandise, setMerchandise] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Доданий хук для відстеження завантаження
  const [error, setError] = useState(null); // Доданий хук для відстеження помилок

  useEffect(() => {
    
    const loadProduct = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Імітує асинхронне завантаження даних
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(1000);

        const selectedMerchandise = merchandises.find(item => item.id === parseInt(id, 10));

        if (selectedMerchandise) {
          setMerchandise(selectedMerchandise);
          setComments([]);
        } else {
          setMerchandise(null);
          setComments([]);
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
    // Логіка, що виконується при зміні стану коментарів
    console.log('Comment added:', comment);
  }, [comment]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    setComments([...comments, comment]);
    setComment('');
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
              <li key={`comment-${index}`} className="comment-item">{comment}</li>
            ))}
          </ul>

          <form>
            <label>
              Add a comment:
              <input
                type="text"
                value={comment}
                onChange={handleCommentChange}
                className="comment-input"
              />
            </label>
            <button type="button" onClick={handleAddComment} className="comment-btn">
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