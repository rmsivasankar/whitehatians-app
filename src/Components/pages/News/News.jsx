import React from 'react';
import './News.css'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link } from 'react-router-dom';
import Blog_list from '../../../assets/javascript/blog-list';
import { Helmet } from 'react-helmet';

const News = () => {
    return (
        <>
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blog</title>
                <link rel="canonical" href="https://www.whitehatians.in/news" />
            </Helmet>
        </div>
            <div className='news'>
            <h1>BLOG <NewspaperIcon fontSize='large' /> </h1>
            <div class="container">
            {Blog_list.map((blog_l,index) => {
                return  <div class="card">                    
                    <div class="card-header">
                        <img key={index} src={blog_l.image} alt="rover" />
                        <div class="card-body">
                            <span class="tag tag-teal" key={index}>{blog_l.tag}</span>
                            <p key={index}>{blog_l.desc}<Link target="_blank" key={index} to={blog_l.link}>Read More</Link></p>                        
                            <div class="user">
                                <img key={index} src={blog_l.icon} alt="user" />
                                <div class="user-info">
                                    <h5 key={index}>{blog_l.date}</h5>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    })} 
            </div>
        </div>
        </>
    );
}

export default News;
