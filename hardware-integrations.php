<?php if( $_POST ) {

    include('./includes/get-started-post.php');
}

?>
<?php include('includes/header.php'); ?>

<div id="hardware-integrations">
    <div id="hardware-hero" class="padding-top-30 padding-bottom-15 hero">
        <div class="row white">
            <div class="large-12 columns">
                <h1 class="large">Hardware Integrations<br />One Platform.</h1>
            </div>
            <div class="large-12 columns padding-top-30">
                <h4 class="light">Communication occurs on so many devices. Integration is typcially a nightmare.
                We simplify it. And if you have a problem, we're available to walk you through it,
                24/7.</h4>
            </div>
            <div class="large-12 columns text-center padding-top-30" id="hero-down-arrow">
                <img src="img/shared/white_down_arrow.png" alt="">
            </div>
        </div>
    </div>
    <div id="hardware-intro">
        <div class="row">
            <div class="large-12 columns">
                <h3>Integrated devices are like a Wi-Fi connection. When fast, it
                runs so smooth you forget about it. When slow, it's so disruptive
                you could scream. This is what smooth integrated devices look like:</h3>
            </div>
        </div>
    </div>
    <div id="story-1">
        <div class="row">
            <div class="small-12 large-6 columns relative">
                <img src="img/hardware/mary_mobile.png" alt="">
                <img src="img/hardware/phone-icon.png" alt="" id="story-1-phone-icon" class="show-for-large-up">
            </div>
            <div class="small-12 large-6 columns">
                <h3>Mary is having a great day at work. She is on a call on the landline,
                so she transfers an incoming call to Alex.</h3>
            </div>
        </div>
    </div>
    <div id="story-2">
        <div class="row">
            <div class="small-12 large-6 large-offset-1 columns clearfix">
                <img src="img/hardware/alex_mobile.png" alt="" class="hide-for-large-up">
                <img src="img/hardware/alex_mobile_2.png" alt="" class="hide-for-large-up">
                <img src="img/hardware/alex_desktop.png" alt="" class="show-for-large-up left">
                <img src="img/hardware/incoming_call.png" alt="" class="show-for-large-up left">
            </div>
            <div class="small-12 large-5 columns">
                <h3>Alex sees on his cell phone that there's a call from David, a hot lead.
                He's on his way to the office. I am running a bit late.</h3>
            </div>
        </div>
        <div class="row">
            <div class="small-12 columns hide-for-large-up">
                <img src="img/hardware/david_mobile.png" alt="">
            </div>
            <div class="large-11 columns large-offset-1 inline-block show-for-large-up padding-top-30">
                <img src="img/hardware/david_desktop_1.png" alt="">
                <img src="img/shared/walking_icon.png" alt="" id="walking-icon-1">
                <img src="img/hardware/david_desktop_3.png" alt="">
                <img src="img/shared/walking_icon.png" alt="" id="walking-icon-2">
            </div>
        </div>
    </div>
    <div id="story-3">
        <div class="row">
            <div class="small-12 large-5 columns">
                <h3>David stops by the office later that day. He rings the intercom,
                and Mary sees him on her computer. Come on in David!</h3>
            </div>
            <div class="small-12 large-6 large-offset-1 columns">
                <img src="img/hardware/david_intercom_mobile.png" alt="" class="hide-for-large-up">
                <img src="img/hardware/david_intercom_desktop.png" alt="" class="show-for-large-up">
                <img src="img/shared/signal_1.png" alt="" class="signal-graphic" id="signal-1">
                <img src="img/shared/signal_2.png" alt="" class="signal-graphic" id="signal-2">
                <img src="img/shared/signal_3.png" alt="" class="signal-graphic" id="signal-3">
            </div>
        </div>
    </div>
    <div id="all-in-one">
        <div class="row">
            <div class="small-12 large-6 columns">
                <h2 class="large">The all-in-one Communications Solution</h2>
                <p class="padding-top-30 padding-bottom-15">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illum, dolore, ipsam unde sint qui illo quam numquam, quos aspernatur nostrum ratione assumenda cum! Voluptatem corporis sequi, neque illum veritatis.
                </p>
                <div class="clear button-container">
                    <a href="./get-started.php">
                        <button class="left white red-orange-background">Get Started</button>
                    </a>
                    <div class="red-orange-background left">
                        <img src="img/shared/white_right_arrow.png" alt="">
                    </div>
                </div>
            </div>
            <div class="large-6 columns show-for-large-up">
                <img src="img/shared/services_graphic_desktop.png" alt="">
            </div>
        </div>
        <div class="padding-top-30 hide-for-large-up text-center">
            <img src="img/shared/services_graphic_mobile.png" alt="">
        </div>
    </div><!-- #all-in-one -->

    <div id="discounts" class="card-section padding-bottom-50 padding-top-50">
        <h1 class="text-center padding-top-50 padding-bottom-30">Device Discounts</h1>
        <?php include('includes/devices.php'); ?>
    </div><!-- #discounts -->
    <div id="hardware-support">
        <div class="row">
            <div class="large-12 columns show-for-large-up border-top"></div>
            <div class="small-12 columns text-center">
                <h3>Got Questions? See our <a href="#" target="_blank">Guide</a> here or contact
                <a href="#" target="_blank">Support</a> directly.</h3>
            </div>
        </div>
        <div class="row">
            <div class="small-12 large-10 columns large-centered">
                <div class="row">
                    <div class="small-12 large-6 columns white teal-background padding-top-80 padding-bottom-80 text-center">
                        <h4 class="white">
                            <div class="small-9 columns small-centered padding-bottom-30">First time guest?</div>
                        </h4>
                        <a href="./get-started.php" class="white-border white uppercase text-center small">Get Started</a>
                    </div>
                    <div class="small-12 large-6 columns white medium-dark-gray-background padding-top-80 padding-bottom-80 text-center">
                        <h4 class="white text-center">
                            <div class="small-9 columns small-centered padding-bottom-30">Returning Customer</div>
                        </h4>
                        <a href="#" class="white-border white uppercase small login-button">Login</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><!-- #hardware-integrations -->

<?php include('includes/trial.php'); ?>

<?php include('includes/footer.php'); ?>