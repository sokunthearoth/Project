import Image from './../component/presentations/imageCart'
import styles from '../styles/style_page.module.css'
import ParallaxImage from '../component/presentations/parallax_image'
import Search from '../component/containers/search'
import Sidebar from '../component/containers/sidebar'
import Sort from '../component/containers/sort'
import { ProductContext } from './../component/contexts/ProductContext'
import { SearchContext } from './../component/contexts/SearchContext'
import { SelectContext } from './../component/contexts/SelectContext'
import React, { useState, useEffect, useContext } from 'react';
export default function Girl() {
    const products = {
        men_shirt: [
            {
                url: "hoddies.jpg",
                name: "Plaid Shirt",
                price: 10,
                gender: "MEN",
                type: "new-in",
            },
            {
                url: "jecket.jpg",
                name: "Coat",
                price: 30,
                gender: "MEN",
                type: "new-in",
            },
            {
                url: "product-image.jpg",
                name: "Coat",
                price: 25,
                gender: "MEN",
                type: "new-in",
            },
            {
                url: "product_for_men_watch.jpg",
                name: "Shirt",
                price: 25,
                gender: "MEN",
                type: "new-in",
            },

            {
                url: "product_for_men_T-shirt.jpg",
                name: "Shirt",
                price: 10,
                gender: "MEN",
                type: "new-in",
            },
        ],
        men_pants: [
            {
                url: "trouser.jpg",
                name: "Throuser",
                price: 8,
                gender: "MEN",
                type: "new-in",
            },
            {
                url: "short.jpg",
                name: "Short",
                price: 15,
                gender: "MEN",
                type: "new-in",
            },
        ],
        men_shoes: [
            {
                url: "shoes1.png",
                name: "Boots",
                price: 50,
                gender: "MEN",
                type: "new-in",
            },
            {
                url: "shoes2.jpg",
                name: "Vans",
                price: 70,
                gender: "MEN",
                type: "new-in",
            },
            {
                url: "shoes3.jpg",
                name: "Men Shoes",
                price: 60,
                gender: "MEN",
                type: "new-in",
            },
        ],
        men_belts: [
            {
                url: "belts1.jpg",
                name: "Belt",
                price: 10,
                gender: "MEN",
                type: "new-in",
            },
            {
                url: "belts2.jpg",
                name: "Men Belt",
                price: 15,
                gender: "MEN",
                type: "new-in",
            },
        ],
        men_watches: [
            {
                url: "watches1.jpg",
                name: "Gold Watch",
                price: 100,
                gender: "MEN",
                type: "new-in",
            },
            {
                url: "watches2.jpg",
                name: "Mechanic Watch",
                price: 160,
                gender: "MEN",
                type: "new-in",
            },
            {
                url: "watches3.jpg",
                name: "Diamond Watch",
                price: 300,
                gender: "MEN",
                type: "new-in",
            },
        ],
        women_shirts: [
            {
                url: "set_clothe_women.jpg",
                name: "Set_Shirt",
                price: 15,
                gender: "WOMEN",
                type: "new-in"
            },
            {
                url: "product_for_women_hoodie_pink.jpg",
                name: "Shirt",
                price: 10,
                gender: "WOMEN",
                type: "new-in"
            },
        ],
        women_skirts: [

            {
                url: "product_for_women_jean.jpg",
                name: "Jean",
                price: 18,
                gender: "WOMEN",
                type: "new-in"
            },
            {
                url: "product_for_women_skirt.jpg",
                name: "Skirt",
                price: 15,
                gender: "WOMEN",
                type: "new-in"
            },
            {
                url: "skirt.jpg",
                name: "Skirt",
                price: 15,
                gender: "WOMEN",
                type: "new-in"
            },
        ],
        women_dresses: [
            {
                url: "yellow_dress.jpg",
                name: "Dress",
                price: 10,
                gender: "WOMEN",
                type: "new-in"
            },
            {
                url: "brown_dress.jpg",
                name: "Dress",
                price: 15,
                gender: "WOMEN",
                type: "new-in",
            },
            {
                url: "blue_dress.jpg",
                name: "Dress",
                price: 20,
                gender: "WOMEN",
                type: "new-in",
            },
        ],
        women_comestics: [
            {
                url: "cosmestics1.png",
                name: "Lipstick",
                price: 20,
                gender: "WOMEN",
                type: "new-in",
            },
            {
                url: "cosmestics2.png",
                name: "Makeup",
                price: 20,
                gender: "WOMEN",
                type: "new-in",
            }
        ],
        boy_shirts: [
            {
                url: "product_for_boy_set_T-shirt.jpg",
                name: "T-shirt",
                price: 10,
                gender: "BOY",
                type: "new-in",
            },
            {
                url: "product_for_boy_sport_T-shirt.jpg",
                name: "T-shirt",
                price: 10,
                gender: "BOY",
                type: "new-in",
            },
            {
                url: "product_for_boy_shocks.jpg",
                name: "Plaid Shirt",
                price: 10,
                gender: "BOY",
                type: "new-in",
            },
        ],
        boy_pants: [
            {
                url: "product_for_boy_trousers.jpg",
                name: "Trouser",
                price: 10,
                gender: "BOY",
                type: "new-in",
            },
        ],
        boy_shoes: [
            {
                url: "product_for_boy_shoes.jpg",
                name: "Trouser",
                price: 10,
                gender: "BOY",
                type: "new-in",
            },
        ],
        girl_shirts: [
            {
                url: "girl shirt1.jpg",
                name: "Black-hoodie kid",
                price: 5,
                gender: "GIRL",
                type: "new-in",
            },
            {
                url: "product_for_girl_Orange_clothes.jpg",
                name: "Set - shirt Kid",
                price: 15,
                gender: "GIRL",
                type: "new-in",
            },
            {
                url: "shirt girl1.jpg",
                name: "Shirt kid",
                price: 10,
                gender: "GIRL",
                type: "new-in",
            },
            {
                url: "hoddies_girl.jpg",
                name: "Hoddie kid",
                price: 15,
                gender: "GIRL",
                type: "new-in",
            },
            {
                url: "pink_hoodie_girl.jpg",
                name: "Hoddie kid",
                price: 10,
                gender: "GIRL",
                type: "new-in",
            },
        ],
        girl_pants: [
            {
                url: "product_for_girl_trouser.jpg",
                name: "Trouser",
                price: 8,
                gender: "GIRL",
                type: "new-in",
            },
            {
                url: "pants girl1.jpg",
                name: "Trouser",
                price: 8,
                gender: "GIRL",
                type: "new-in",
            },
            {
                url: "pants girl2.jpg",
                name: "Trouser",
                price: 8,
                gender: "GIRL",
                type: "new-in",
            },
            {
                url: "pants girl3.jpg",
                name: "Trouser",
                price: 8,
                gender: "GIRL",
                type: "new-in",
            },
            {
                url: "pants girl4.jpg",
                name: "Trouser",
                price: 8,
                gender: "GIRL",
                type: "new-in",
            },
        ],
        skin_cares: [
            {
                url: "product_SkinCare.jpg",
                name: "CLAM Skincare",
                price: 15,
                gender: "SKIN-CARE",
                type: "new-in",
            },
            {
                url: " skincare-set-dry.jpg",
                name: "Bella Aura Skincare",
                price: 20,
                gender: "SKIN-CARE",
                type: "new-in",
            },
            {
                url: "Skin_care.jpg",
                name: "Lightening Serum",
                price: 25,
                gender: "SKIN-CARE",
                type: "new-in",
            },
            {
                url: "Men_SkinCare.jpg",
                name: "Best Face Mask",
                price: 25,
                gender: "SKIN-CARE",
                type: "new-in",
            },
        ],
    }
    const [sort, issort] = React.useState("d")
    const { select, setselect } = useContext(SelectContext);
    const { cart, setcart } = useContext(ProductContext);
    const { search, setsearch } = useContext(SearchContext);
    const [issearch, setissearch] = useState(false);
    const addcart = (carts) => {
        setcart(cart.concat(carts));
        console.log(cart);
    }
    const style= {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
    const match1 = products.girl_pants.some(item => item.name.includes(search));
    const match2 = products.girl_shirts.some(item => item.name.includes(search));
    const handlesearch = (e) => {
        setsearch(e.target.value);
        setissearch(true);
        console.log(search);
        console.log(issearch);
    }
    const handlesort = (e) => {
        issort(e.target.value);
        setissearch(false);
        console.log(typeof (sort));
    }
    return (
        <div>
            <ParallaxImage title="girl" />
            <div className={styles.product_girl}>
                {/* <hr className={styles.hr}></hr> */}
                <div className={styles.sidebar}>
                    <Sidebar></Sidebar>
                </div>
                <div className={styles.Girl}>
                    <div className={styles.Group}>
                        <Search onchange={handlesearch}></Search>
                        <Sort onchange={handlesort}></Sort>
                    </div>
                    <hr className={styles.hr}></hr>
                    <div className={styles.product}>
                        {issearch && sort === "d" && select === 'girl_shirts' && products.girl_shirts.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "d" && select === 'girl_shirts' && products.girl_shirts.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "lh" && select === 'girl_shirts' && products.girl_shirts.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "hl" && select === 'girl_shirts' && products.girl_shirts.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "d" && select === 'girl_pants' && products.girl_pants.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                                                {issearch && sort === "d" && select === 'girl_pants' && products.girl_pants.filter(item => item.name.toLowerCase().includes(search)).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "lh" && select === 'girl_pants' && products.girl_pants.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {issearch && sort === "hl" && select === 'girl_pants' && products.girl_pants.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                                                {!issearch && sort === "lh" && select === 'girl_pants' && products.girl_pants.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => a.price - b.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                        {!issearch && sort === "hl" && select === 'girl_pants' && products.girl_pants.filter(item => item.name.toLowerCase().includes(search)).sort((a, b) => b.price - a.price).map((product, index) => {
                            return (
                                <div className={styles.img}>
                                    <Image key={index} onclick={() => addcart(product)} src={product.url} title={product.name} price={product.price} />
                                </div>

                            );
                        }
                        )}
                    </div>
                </div>
            </div>
            {match1 && match2 ?  (<div/>):(<img src='sorry.png' style={style} />)}
            {!match1 && !match2 ?  (<div/>):(<div/>)}
        </div>
    )
}