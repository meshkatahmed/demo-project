'use client';
import { useState } from 'react';
import styles from '@/styles/homepage-searchCar.module.css';

export default function SearchCar() {
    const [minPrice, setMinPrice] = useState("500000");
    const [maxPrice, setMaxPrice] = useState("11655600");


    function getSliderinput(e: React.FormEvent<HTMLInputElement>) {
        (e.target as HTMLInputElement).id === 'priceMin' ?
            setMinPrice((e.target as HTMLInputElement).value) :
            setMaxPrice((e.target as HTMLInputElement).value);
    }

    return (
        <div>
            <div className='pageSectionBody'>
                <div className={styles.searchContainer}>
                    <select name="condition" id="condition" className={styles.dropdown}>
                        <option value="" selected disabled>Condition</option>
                        <option value="used">Used</option>
                        <option value="new">New</option>
                        <option value="reconditioned">Reconditioned</option>
                    </select>


                    <select name="category" id="category" className={styles.dropdown}>
                        <option value="" selected disabled>Category</option>
                        <option value="sedan">Sedan</option>
                        <option value="convertible">Convertible</option>
                        <option value="crossover">Crossover</option>
                    </select>

                    <select name="brand" id="brand" className={styles.dropdown}>
                        <option value="" selected disabled>Brand</option>
                        <option value="audi">Audi</option>
                        <option value="bently">Bently</option>
                        <option value="bmw">BMW</option>
                    </select>

                    <div className={styles.rangeSlider}>
                        <div className={styles.rangeMin}>
                            <input onInput={getSliderinput} type="range" id="priceMin" min="500000" max="11655600" value={minPrice} className={styles.slider} />
                            <p>{minPrice} $</p>
                        </div>

                        <div className={styles.rangeMax}>
                            <input onInput={getSliderinput} type="range" id="priceMax" min="500000" max="11655600" value={maxPrice} className={styles.slider} />
                            <p>{maxPrice} $</p>
                        </div>
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Find My Car</button>
                </div>
            </div>
        </div>
    );
}
