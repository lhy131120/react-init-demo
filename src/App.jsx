import { useRef, useEffect } from "react";
import { Modal } from "bootstrap";
// import { Swiper, SwiperSlide } from "swiper/react";

// Swiper
import Swiper from "swiper";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import hero1 from "./assets/images/image-1.jpg";
import hero2 from "./assets/images/image-2.jpg";
import hero3 from "./assets/images/image-3.jpg";
import catFood from "./assets/images/cat-food.jpg";
import dogFood from "./assets/images/dog-food.jpg";
import petToys from "./assets/images/pet-toys.jpg";
import petClothes from "./assets/images/pet-clothes.jpg";

// css
import "./assets/scss/main.scss";

const heros = [
	{ name: "hero1", path: hero1 },
	{ name: "hero2", path: hero2 },
	{ name: "hero3", path: hero3 },
];

function App() {
	// const [count, setCount] = useState(0)

	const mySwiper = useRef(null);
	const swiperInstanceRef = useRef(null);
	const headerRef = useRef(null);

	useEffect(() => {
		if (mySwiper.current) {
			swiperInstanceRef.current = new Swiper(mySwiper.current, {
				// Optional parameters
				modules: [Navigation, Scrollbar],
				loop: true,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},

				scrollbar: {
					el: ".swiper-scrollbar",
				},
			});
		}
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 300) {
				headerRef.current.classList.add("sticky-top");
				headerRef.current.classList.add("bg-white");
				document.querySelector("main").style.paddingTop = `${headerRef.current.offsetHeight}px`;
			} else {
				headerRef.current.classList.remove("sticky-top");
				headerRef.current.classList.remove("bg-white");
				document.querySelector("main").style.paddingTop = "0";
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div className="wrapper">
				<header ref={headerRef} className="header bg-primary">
					<nav className="navbar navbar-expand-lg">
						<div className="container">
							<a className="navbar-brand" href="#">
								Lorem
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasNavbar"
								aria-controls="offcanvasNavbar"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div
								className="offcanvas offcanvas-end"
								tabIndex="-1"
								id="offcanvasNavbar"
								aria-labelledby="offcanvasNavbarLabel"
							>
								<div className="offcanvas-header">
									<h5 className="offcanvas-title" id="offcanvasNavbarLabel">
										Lorem
									</h5>
									<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
								</div>
								<div className="offcanvas-body">
									<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
										<li className="nav-item">
											<a className="nav-link active" aria-current="page" href="#">
												首頁
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="#">
												商品分類
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="#">
												關於我們
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="#">
												聯繫我們
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</nav>
				</header>
				<main>
					<section id="hero" className="hero bg-gradient-main py-8 py-lg-10 ratio-1x1">
						<div className="container">
							<div className="row">
								<h1 className="mb-4 mb-lg-6 fs-4 fs-lg-3 text-secondary">為您的毛孩提供最貼心的呵護</h1>
								<h2 className="mb-3 mb-lg-5 fs-7 fs-lg-5">精選高品質貓狗用品，讓您的寵物每天都健康快樂</h2>
								<div className="d-flex gap-3 mb-3 py-8">
									<button className="button button-primary">立即選購</button>
									<button className="button button-secondary">探索熱門商品</button>
								</div>
								<ul className="list-unstyled mb-0 d-flex gap-4">
									<li className="fw-bold">免費配送</li>
									<li className="fw-bold">30天退貨保證</li>
									<li className="fw-bold">24小時客服</li>
								</ul>
							</div>
						</div>
					</section>

					<section id="categories" className="py-8 py-lg-10">
						<div className="container">
							<div className="text-center">
								<h2 className="mb-3 mb-lg-5 fs-7 fs-lg-5">為您的寵物尋找完美選擇</h2>
							</div>
							<div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-2 g-lg-3">
								<div className="col">
									<div className="catItem">
										<img src={catFood} />
										<h3>旅行用品</h3>
									</div>
								</div>
								<div className="col">
									<div className="catItem">
										<img src={dogFood} />
										<h3>小寵物用品</h3>
									</div>
								</div>
								<div className="col">
									<div className="catItem">
										<img src={catFood} />
										<h3>寵物科技用品</h3>
									</div>
								</div>
								<div className="col">
									<div className="catItem">
										<img src={petClothes} />
										<h3>寵物衣物</h3>
									</div>
								</div>
								<div className="col">
									<div className="catItem">
										<img src={catFood} />
										<h3>寵物清潔用品</h3>
									</div>
								</div>
								<div className="col">
									<div className="catItem">
										<img src={dogFood} />
										<h3>寵物食品</h3>
									</div>
								</div>
								<div className="col">
									<div className="catItem">
										<img src={petToys} />
										<h3>寵物玩具</h3>
									</div>
								</div>
								<div className="col">
									<div className="catItem">
										<img src={dogFood} />
										<h3>貓用品</h3>
									</div>
								</div>
								<div className="col">
									<div className="catItem">
										<img src={catFood} />
										<h3>狗用品</h3>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section id="best-sellers" className="bg-white py-8 py-lg-10">
						<div className="container">
							<div className="text-center">
								<h2 className="mb-3 mb-lg-5 fs-7 fs-lg-5">我們的明星商品</h2>
								<h3 className="mb-2 mb-lg-3 fs-8 fs-lg-6 text-primary">被千萬貓奴狗奴所喜愛的熱銷產品</h3>
							</div>
						<div className="row row-cols-lg-4 g-lg-3">
							<div className="col">
								<div className="hotItem overflow-hidden border-1  border">
									<div>
										<img className="img w-100 h-100 object-fit-cover" src={hero1} alt="" />
									</div>
									<div className="py-2 px-3">
										<p className="fw-bold fs-9 fs-lg-7 fs-lg-6 mb-2">Product 1</p>
										<p className="mb-2">$2303</p>
										<ul className="starsWrap list-unstyled mb-3">
											<li className="star"></li>
											<li className="star"></li>
											<li className="star"></li>
											<li className="star"></li>
											<li className="star"></li>
										</ul>
										<button className="button button-secondary ">加入購物車</button>
									</div>
								</div>
							</div>
						</div>
						</div>
					</section>

					<section className="py-8 py-lg-10">
						<div className="container">
							<div className="text-center px-2">
								<h2>為什麼選擇我們的寵物用品</h2>
							</div>
							<div>
								<h3>優質精選</h3>
								<p>所有產品都經過嚴格篩選，確保安全和高品質</p>
							</div>
							<div>
								<h3>專業建議</h3>
								<p>我們的團隊都是寵物愛好者，提供專業購物建議</p>
							</div>
							<div>
								<h3>快速配送</h3>
								<p>快速送貨，指定地區當日送達</p>
							</div>
							<div>
								<h3>寵物友好</h3>
								<p>我們測試每款產品，確保寵物喜愛</p>
							</div>
						</div>
					</section>

					<section className="bg-white py-8 py-lg-10">
						<div className="container">
							<div className="text-center px-2">
								<h2>寵物主人的真實回饋</h2>
							</div>
							<div className="reviewBlock">
								<div>
									<p>
										陳曉明<span>已購物2年</span>
									</p>
									<p>評分: 5星</p>
									<p>
										網站的狗糧選擇比實體店還要多！我家的黃金獵犬非常挑食，但這裡推薦的天然糧他竟然一口氣吃完。配送也很快，通常當天下單隔天就收到了。客服回覆也很專業，解答了我很多關於狗狗營養的問題。
									</p>
								</div>
								<div>
									<p>
										林美玲<span>已購物8個月</span>
									</p>
									<p>評分: 5星</p>
									<p>
										給我家兩隻貓咪買了新款爬架，品質比預期的還要好！組裝簡單，而且非常穩固。唯一的小缺點是配送時間比預期晚了一天，但客服很貼心地提前通知了。四星半的體驗，絕對會再次購買。
									</p>
								</div>
								<div>
									<p>
										Ken Chan<span>已購物1年多</span>
									</p>
									<p>評分: 5星</p>
									<p>
										這是我找到的最好的寵物用品網站！我家的柯基犬過敏體質，一直找不到適合的洗毛精。客服推薦的敏感肌專用系列真的改善了他的皮膚問題。價格也很合理，經常有折扣活動。最重要的是，他們的產品都很安全，成分清單很透明。
									</p>
								</div>
								<div>
									<p>Alice Lee</p>
									<p>評分: 5星</p>
									<p>
										網站的狗糧選擇比實體店還要多！我家的黃金獵犬非常挑食，但這裡推薦的天然糧他竟然一口氣吃完。配送也很快，通常當天下單隔天就收到了。客服回覆也很專業，解答了我很多關於狗狗營養的問題。
									</p>
								</div>
								<div>
									<p>Ray Wong</p>
									<p>評分: 4星</p>
									<p>
										整體購物體驗很好，特別是他們的會員積分系統很划算。我家的泰迪犬很喜歡這裡買的零食，每次拆包裹他都特別興奮。唯一建議改進的是希望能增加更多小型犬專用的衣服款式。客服回應速度很快，也很專業。
									</p>
								</div>
							</div>
							<div className="text-center px-2">
								<h3>獲取獨家優惠與寵物護理資訊</h3>
								<form className="w-75 mx-auto" action="">
									<div className="my-3">
										<input
											className="form-control"
											type="text"
											placeholder="Default input"
											aria-label="default input example"
										/>
									</div>
								</form>
							</div>
						</div>
					</section>
				</main>
				<footer className="footer"></footer>
			</div>
		</>
	);
}

export default App;
