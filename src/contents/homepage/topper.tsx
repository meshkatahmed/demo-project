import style from '@/styles/homepage-topper.module.css';

export default function Topper() {
    return (
        <div className={`${style.homepageTopper} container px-20 py-10`}>
            <h2>GET YOUR DESIRED CAR IN REASONABLE PRICE</h2>
            <div className='pageSectionBody'>
                <p>Some text about the kind of service we provide could be written here</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Us</button>
        </div>
    )
}