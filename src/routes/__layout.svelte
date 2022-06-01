<!DOCTYPE html>
<html lang="en">
<head>
<title>Michelob ULTRA</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://kit.fontawesome.com/9d6bfaf705.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="./styles/global.css" />
</head>

<body>

	<div class="header">
		<div class="navbar">
			<img class="logo" src="img/logo.png" alt="Michelob Ultra Logo" />
			<div class="nav">
				<a href="#megaHider"><i class="fa-regular fa-bars"></i>Main Menu</a>
				<a href="#"><i class="fa-regular fa-award"></i>Rewards</a>
				<a href="#" class="find"><i class="fa-regular fa-location"></i>Find Product</a>
				<a href="#"><i class="fa-regular fa-globe en"></i>En</a>
			</div>
		</div>
        <div id="megaHider">
            <div class="mega">
                <div class="menuSection">
                    <h5>Our Beers</h5>
                    <ul>
                        <li>
                            <b>Beers</b>
                            <i class="fa fa-regular fa-angle-down"></i>
                            <ul class="sub-nav">
                                <li>
                                    <a href="/our-beers/ultra-light-beer/">Michelob ULTRA</a>
                                </li>
                                <li>
                                    <a href="/our-beers/ultra-pure-gold/">Michelob ULTRA Pure Gold</a>
                                </li>
                                <li>
                                    <a href="/our-beers/amber-max/">AMBER Max</a>
                                </li>
                                <li>
                                    <a href="/our-beers/infusion/">Infusions</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>View All Beers</strong>
                        </li>
                    </ul>
                </div>
                <div class="menuSection">
                    <h5>Our Seltzers</h5>
                    <ul>
                        <li>
                            <b>Seltzers</b>
                            <i class="fa fa-regular fa-angle-down"></i>
                            <ul class="sub-nav">
                                <li>
                                    <a href="/our-beers/ultra-light-beer/">Berry Hibiscus</a>
                                </li>
                                <li>
                                    <a href="/our-beers/ultra-pure-gold/">Blue Watermelon</a>
                                </li>
                                <li>
                                    <a href="/our-beers/amber-max/">Kiwi Lime</a>
                                </li>
                                <li>
                                    <a href="/our-beers/ultra-light-beer/">Strawberry Guava</a>
                                </li>
                                <li>
                                    <a href="/our-beers/ultra-pure-gold/">Watermelon Strawberry</a>
                                </li>
                                <li>
                                    <a href="/our-beers/amber-max/">Cucumber Lime</a>
                                </li>
                                <li>
                                    <a href="/our-beers/amber-max/">Spicy Pineapple</a>
                                </li>
                                <li>
                                    <a href="/our-beers/amber-max/">Black Cherry</a>
                                </li>
                                <li>
                                    <a href="/our-beers/amber-max/">Mixed Berry</a>
                                </li>
                                <li>
                                    <a href="/our-beers/amber-max/">Citrus</a>
                                </li>
                                <li>
                                    <a href="/our-beers/infusion/">Mango Apricot</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>View All Seltzers</strong>
                        </li>
                        <li>
                            <strong>Recipes</strong>
                        </li>
                    </ul>
                </div>
                <div class="menuSection">
                    <h5>Campaigns</h5>
                    <ul>
                        <li>
                            <a href='#'>Enjoy It Like It's 1993</a>
                        </li>
                        <li>
                            <a href="#">Major Monday Sweepstakes</a>
                        </li>
                        <li>
                            <a href="#">Movement by Michelob Ultra</a>
                        </li>
                        <li>
                            <a href="#">Play for ULTRA</a>
                        </li>
                        <li>
                            <a href="#">Run With ULTRA</a>
                        </li>
                        <li>
                            <a href="#">Save It, See It</a>
                        </li>
                        <li>
                            <a href="#">Superior Bowl</a>
                        </li>
                    </ul>
                </div>
                <div class="menuSection">
                    <h5>About Us</h5>
                    <ul>
                        <li>
                            <a href="#">Our Story</a>
                        </li>
                        <li>
                            <a href="#">Solar</a>
                        </li>
                        <li>
                            <a href="#">Contract For Change</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>

                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div class="menuSection">
                    <h5>Merch</h5>
                    <ul>
                        <li>
                            <a href="#">Buy Gear</a>
                        </li>
                    </ul>
                </div>
                <div class="menuAdSection">
                    <h5 class="red">CHOOSE ORGANIC.<br />
                        WIN REWARDS.</h5>
                    <a href="#" class="red button">Sign Up</a>
                </div>
            </div> 
        </div>
	</div>

	<slot></slot>

	<div class="footer">
		<h2>Footer</h2>
	</div>

	</body>

</html>


