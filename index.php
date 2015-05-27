<?php if( $_POST ) {

    if ( isset($_POST['name']) ) {

        $name = $_POST['name'];
        $separated = explode(" ", $name);
        $firstName = $separated[0];
        $lastName = $separated[1];

        setcookie("firstName", $firstName);
        setcookie("lastName", $lastName);
    }

    if ( isset($_POST['email']) ) {

        $email = $_POST['email'];
        setcookie("email", $email);
    }

    header('Location: ./get-started.php');
} else {

    if ( !isset($_COOKIE['hasData'])) {

        setcookie('hasData', false);
    }

    if ( !isset($_COOKIE['update'])) {

        setcookie('update', false);
    }

    if ( !isset($_COOKIE['firstName'])) {

        setcookie("firstName", '');
    }
    if ( !isset($_COOKIE['lastName'])) {

        setcookie("lastName", '');
    }
    if ( !isset($_COOKIE['email'])) {

        setcookie("email", '');
    }
}
?>
<?php include('includes/header.php'); ?>
<div id="home">
    <div class="row show-for-large-up" id="page-brand">
        <div class="large-12 columns text-center">
            <img src="img/shared/jamooz_logo_large.png" alt="Large Jamooz logo" class="large-centered">
        </div>
    </div>
    <div id="hero" class="hero">
        <div class="text-center">
            <h1 class="large">Ease Into a Better Communication Experience For
            Your Office Staff</h1>
        </div>
        <div class="text-center">
            <img src="img/home/hero.jpg" alt="">
        </div>
        <div class="text-center" id="hero-text">
            <a href="./get-started.php">
                <button class="teal-background uppercase radius width-100-percent white">Get Started for 30 Days Free</button>
            </a>
            <h6>A customer success teammate is ready. <a href="#">Support</a></h6>
            <h6>Already setup? <a href="#" class="login-button">Login</a></h6>
            <div id="hero-down-arrow" class="black">
                <img src="img/shared/down_arrow_black.png" alt="" class="padding-top-15 pointer">
                <h6 class="small text-center">learn more</h6>
            </div>
        </div>
    </div><!-- #hero -->
    <div id="intro" class="full-height">
        <div class="row clearfix">
            <div class="small-12 medium-6 columns text-center right">
                <img src="img/home/hardware_graphic.png" alt="" class="padding-bottom-30">
            </div>
            <div class="small-12 medium-6 columns text-left left">
                <h1 class="padding-bottom-30 no-text-transform large condensed">Better communication starts with your hardware.</h1>
                <p>10 computers, 20 smartphones, 12 office phones, 2 intercoms, &amp; even 1 doorbell. Tell us the devices you need or just integrate the devices you already use. Just a few clicks to view &amp; change device phone numbers &amp; extensions.</p>
            </div>
        </div>
    </div>
    <div class="orange-background white learn-section">
        <div class="row">
            <div class="large-12 columns text-center">
                <h4 class="white small-12 columns small-centered large">
                    <div class="small-9 columns small-centered padding-bottom-50">Learn what hardware works with Jamooz</div>
                </h4>
                <a href="./hardware-integrations.php">
                    <h4 class="white-border white small-12 columns padding-top-8 padding-bottom-8 max-285 small-centered small">See Hardware Integrations</h4>
                </a>
            </div>
        </div>
    </div>
    <div class="row clearfix full-height" id="reliable">
        <div class="small-12 large-7 columns text-center right">
            <img src="img/home/reliable_graphic_mobile.png" class="padding-top-30 padding-bottom-30 hide-for-large-up center" alt="">
            <div class="padding-top-30 padding-bottom-30 show-for-large-up" alt="">
                <video id="reliable-video" autoplay loop class="width-100-percent">
                  <source src="video/reliable.mp4" type="video/mp4">
                  <!--<source src="video/campfire_1.webm" type="video/webm">-->
                </video>
            </div>
        </div>
        <div class="small-12 large-5 columns small-centered left">
            <h1 class="padding-bottom-30 no-text-transform large condensed">A reliable platform using battle tested technology</h1>
            <p>We’re like a power secretary. Every call, message, file, &amp; voicemail throughout your organization is distributed and managed securely. VoIP, PBX, SIP Trunking, &amp; encryption are combined to make up our reliable platform. We then curate our platform for you, so you don’t have to.</p>
        </div>
    </div>
    <div class="dark-blue-background learn-section">
        <div class="row">
            <div class="large-12 columns text-center">
                <h4 class="white small-12 columns small-centered large">
                    <div class="small-9 columns small-centered padding-bottom-50">Learn what software works with Jamooz</div>
                </h4>
                <a href="./software-integrations.php">
                    <h4 class="small-12 columns white-border white padding-top-8 padding-bottom-8 max-285 small-centered small">See Software Integrations</h4>
                </a>
            </div>
        </div>
    </div><!-- #reliable -->
    <div class="row padding-top-50 padding-bottom-50 full-height" id="analytics">
        <div class="small-12 medium-6 columns">            
            <img src="img/home/analytics_graphic.png" alt="" class="hide-for-large-up">
            <video autoplay loop class="width-100-percent show-for-large-up">
              <source src="video/analytics.mp4" type="video/mp4">
            </video>
        </div>
        <div class="small-12 medium-6 columns">
            <h1 class="padding-bottom-30 no-text-transform condensed">Phone analytics for success measurement &amp;
            team feedback</h1>
            <p>Jamooz takes analytics to the next step with actions.
            See where all of your team's efforts are being put.
            Then share the stats with your team to highlight areas
            of improvement.</p>
        </div>
    </div><!-- #analytics -->
    <div class="light-gray-background padding-top-50 padding-bottom-50 full-height" id="customer-success">
        <div class="row clearfix">
            <div class="text-center small-12 medium-6 columns right">
                <img src="img/home/customer_success_graphic.png" alt="">
            </div>
            <div class="small-12 medium-6 columns left">
                <h1 class="padding-bottom-30 no-text-transform condensed">A customer success teammate at every step</h1>
                <p>Your communication experience should feel lightweight from setup to adoption. Our success guide makes every step easier. Your success teammates will set you up for success. We also make ourselves available 24/7 by phone, e-mail, and text to identify and solve your problems quickly.</p>
            </div>
        </div>
    </div><!-- #customer-success -->
    <div class="row padding-top-30 padding-bottom-50 full-height" id="schmooze">
        <div class="small-12 large-6 columns text-center">
            <img src="img/home/phone_demo.png" alt="" class="hide-for-large-up">
            <video autoplay loop class="show-for-large-up">
              <source src="video/schmooze.mp4" type="video/mp4">
            </video>
        </div>
        <div class="small-12 large-6 columns text-center">
            <h1 class="text-left mint light condensed no-text-transform padding-bottom-30">
                <div class="row">
                    <div class="hide-for-large-up">
                        <div class="small-12 columns">Coming in 2015:</div>
                        <div class="small-12 columns">Schmooze by Jamooz</div>
                    </div>
                    <div class="show-for-large-up">
                        <div class="large-12 columns">Coming in 2015: Schmooze by Jamooz</div>
                    </div>
                </div>
            </h1>
            <h3 class="text-left padding-bottom-15">Jamooz technology, curated. Phone, messaging,
            voicemail, &amp; file sharing redesigned for personal
            use &amp; collaboration.</h3>
            <p class="text-left">View all of your communication channels in one view.
            Or revolutionize your team communication with a circuit
            board of real time team communication.</p>
        </div>
    </div><!-- #schmooze -->
    <div class="medium-blue-background" id="trial">
        <div class="row">
            <div class="large-12 columns text-center">
                <h4 class="white light padding-top-50 padding-bottom-50 small expanded">We give every new customer a free 30 day trial to test run our service with 1-3 extensions. Get started with a Customer Success Teammate.</h4>
            </div>
        </div>
        <div class="row">
            <form action="" method="post"> 
                <div class="large-6 small-10 columns small-centered text-center">
                    <input type="text" placeholder="Your Full Name" class="placeholder-medium-gray  radius large padding-15" name="name">
                </div>
                <div class="large-6 small-10 columns small-centered">
                    <input type="text" placeholder="Email Address" class="placeholder-medium-gray radius large padding-15" name="email">
                </div>
                <div class="large-12 columns text-center">
                    <button class="red-orange-background radius width-100-percent max-285 uppercase white" type="submit">Get Started For 30 Days Free</button>
                    <div class="row">
                        <p class="tiny white small-6 columns small-centered">a customer success teammate is ready to help</p>
                    </div>
                </div>
            </form>
        </div>
    </div><!-- #trial -->
    <div class="row padding-bottom-30" id="process">
        <div class="large-12 columns text-center padding-top-30 padding-bottom-30">
            <h1 class="large expanded">How Does The Process Work?</h1>
        </div>
        <div class="large-12 columns text-center">
            <p>We’ve simplified things for you so it reduces headache and increases your productivity and effectiveness.</p>
        </div>
        <div class="large-8 large-offset-2 large-centered">
            <div class="row">
                <div class="small-12 large-4 columns text-center">
                    <img src="img/home/base_plan.png" alt="">
                    <p class="uppercase small normal padding-top-15">Select Base Plan</p>
                </div>
                <div class="small-12 large-4 columns text-center">
                    <img src="img/home/apps_add_ons.png" alt="">
                    <p class="uppercase small normal padding-top-15">Add Apps &amp; Add-Ons</p>
                </div>
                <div class="small-12 large-4 columns text-center">
                    <img src="img/home/personal_support.png" alt="">
                    <p class="uppercase small normal padding-top-15">24/7 Personal Support</p>
                </div>
            </div>
        </div>
            
    </div><!-- #process -->
    <div class="padding-top-50" id="support">
        <div class="row text-center">
            <button class="no-background white-border small-10 large-4 padding-15">
                <div class="show-for-small-only">
                    <div class="small-12 columns uppercase normal white">
                        Need Support?
                    </div>
                    <div class="small-12 columns uppercase normal white">
                        Contact Us Here
                    </div>
                </div>
                <div class="show-for-medium-up">
                    <div class="uppercase normal white">Need Support? Contact Us Here</div>
                </div>
            </button>
        </div>
        <div class="row text-center">
            
        </div>
    </div><!-- #support -->
</div><!-- #home -->
<?php include('includes/footer.php'); ?>