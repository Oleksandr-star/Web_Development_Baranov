import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import merchandises from '../data/merchandises';
import '../css/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage = () => {
  const { id } = useParams();
  const [merchandise, setMerchandise] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadProduct = () => {
      const selectedMerchandise = merchandises.find(item => item.id === parseInt(id, 10));

      if (selectedMerchandise) {
        setMerchandise(selectedMerchandise);
        setComments([]);
      } else {
        setMerchandise(null);
        setComments([]);
      }
    };

    loadProduct();
  }, [id]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    setComments([...comments, comment]);
    setComment('');
  };

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
            <li key={index} className="comment-item">{comment}</li>
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
