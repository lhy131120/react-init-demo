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

// css
import "./assets/scss/main.scss";

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
    }
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
					<section>
						<div className="" tabIndex="0">
							<div className="swiper" ref={mySwiper}>
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<div className="hero">
											<img src={hero1} alt="" />
										</div>
									</div>
									<div className="swiper-slide">
										<div className="hero">
											<img src={hero2} alt="" />
										</div>
									</div>
									<div className="swiper-slide">
										<div className="hero">
											<img src={hero3} alt="" />
										</div>
									</div>
								</div>

								<button type="button" className="swiper-button-prev">
									Prev
								</button>
								<button type="button" className="swiper-button-next">
									Next
								</button>

								<div className="swiper-scrollbar"></div>
							</div>
						</div>
					</section>
					<section className="min-vh-100">1</section>
					<section className="min-vh-100">2</section>
				</main>
				<footer className="footer"></footer>
			</div>
		</>
	);
}

export default App;
