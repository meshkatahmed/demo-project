import style from '@/styles/homepage-header.module.css';

export default function Header() {
    return (
        <div className={`${style.homepageHeader} container px-20 py-10`}>
            <h2 style={{fontSize:'40px'}}>GET YOUR DESIRED CAR IN REASONABLE PRICE</h2>
            <p>Some text about the kind of service we provide could be written here</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Us</button>
        </div>
    )
}