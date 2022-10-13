import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import List from '../../news.json';
import './News.css';

export default function News() {
    const [news, setNews] = useState(List.news);
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const removeDuplicates = (arr: any[], takes='') => {
        const arr1 = [];
        for (let x of arr.map(one => one[takes])) {
            if (arr1.indexOf(x) === -1) arr1.push(x);
        }
        return arr1;
    }

    return (
        <>
            <div className="news-container">
                <div className="">
                    <a href={'/'}>News</a> &nbsp;&nbsp;&nbsp;
                    <a href={'/form'}>Form</a>
                </div> <br />
                <div className="filters">
                    <div>
                        <label htmlFor="">Categories</label>
                        <select name="" id="" onChange={evt => setCategory(evt.target.value)}>
                            <option value={''}>Choisir</option>
                        {
                            removeDuplicates(List.news, 'category').map((one, idx) => (
                                <option key={idx} value={one}>{ one }</option>
                            ))
                        }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Date</label>
                        <select name="" id="" onChange={evt => setDate(evt.target.value)}>
                            <option value={''}>Choisir</option>
                        {
                            removeDuplicates(List.news, 'date').map((one, idx) => (
                                <option key={idx} value={one}>{ one }</option>
                            ))
                        }
                        </select>
                    </div>
                </div>
                <>
                {
                    news
                    .filter(one => category ? one.category === category : true)
                    .filter(one => date ? one.date === date : true)
                    .map((item, idx) => (
                        <div className="new-item" key={idx}>
                            <h2>{ item.title }</h2>
                            <div className="">
                                Categorie: <b>{ item.category }</b> | 
                                Date: { item.date }
                            </div>
                            <p className="new-text">{ item.text }</p>
                        </div>
                    ))
                }
                </>
            </div>
        </>
    );
}