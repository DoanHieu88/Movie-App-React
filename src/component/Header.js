import { useState } from 'react';
import avatar from '../img/avatar.jpg';
import { useDispatch } from 'react-redux';
import { asyncSearchData, takeFormData } from '../feature/movies/movieSlice';
import { Link } from 'react-router-dom';

const Header = () => {
    const [inputData, setInputData] = useState({ input: '' });
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(takeFormData(inputData));
        dispatch(asyncSearchData(inputData.input))
        setInputData({ input: '' })
    }

    return (
        <header>
            <Link to='/'>
                <div className="heading">
                    <h2>Movie Hot</h2>
                </div>
            </Link>
            <form className="search-control" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Search film...'
                    onChange={(e) => setInputData({ input: e.target.value })}
                    value={inputData.input}
                />
                <button className='search'><i className="fas fa-search"></i></button>
            </form>
            <button className='user' type='submit'>
                <img src={avatar} alt="avatar" />
            </button>
        </header>
    )
}

export default Header