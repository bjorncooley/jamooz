<?php include('includes/header.php'); ?>
<div id="get-started">
    <div class="red-orange-background padding-top-80 padding-bottom-60">
        <div class="row">
            <div class="large-12 columns white">
                <h1 class="large normal">Get Started Today</h1>
                <h4 class="light">in as easy as 3 steps</h4>
            </div>
        </div>
    </div>
    <div  id="step-1" class="padding-top-50 padding-bottom-50">
        <div class="row">
            <div class="small-12 large-8 large-offset-2 columns text-center">
                <h1 class="large">Step 1: Your Contact Info</h1>
                <h4 class="padding-top-50 padding-bottom-30">Tell us who you are and a dedicated success teammate will reach out.</h4>
                <form action="">
                    <input type="text" name="first_name" placeholder="First Name"
                    value="<?php echo isset($_COOKIE['firstName']) ? $_COOKIE['firstName'] : '' ?>"
                    id="first-name">
                    <input type="text" name="last_name" placeholder="Last Name"
                    value="<?php echo isset($_COOKIE['lastName']) ? $_COOKIE['lastName'] : '' ?>"
                    id="last-name"
                    >
                    <input type="email" name="email" placeholder="Email"
                    value="<?php echo isset($_COOKIE['email']) ? $_COOKIE['email'] : '' ?>"
                    id="email">
                    <input type="tel" name="phone_number" placeholder="Phone" id="phone"value="<?php echo isset($_COOKIE['phone']) ? $_COOKIE['phone'] : '' ?>">
                    <input type="text" name="location" placeholder="Location" 
                    value="<?php echo isset($_COOKIE['location']) ? $_COOKIE['location'] : '' ?>"
                    id="location">
                    <input type="text" name="organization" placeholder="Organization" 
                    value="<?php echo isset($_COOKIE['organization']) ? $_COOKIE['organization'] : '' ?>"
                    id="organization">
                    <button type="submit" class="yellow-background margin-top-15">Next</button>
                </form>
            </div>
        </div>
    </div><!-- #step-1 -->
    <div id="step-2" class="card-section">
        <h1 class="text-center padding-bottom-30">Step 2: Pick Your Perfect Plan</h1>
        <div class="relative">
            <div class="row relative slide-container" id="plans">
                <div class="large-12 columns relative slide">
                    <img src="img/shared/slider_left_arrow_black.png" alt="" class="left-arrow card-left-arrow">
                    <img src="img/shared/slider_right_arrow_black.png" alt="" class="right-arrow card-right-arrow">
                    <h3 class="text-center">A) Choose a Base Plan</h3>
                    <?php include('includes/plan-cards.php'); ?>
                    <div class="row">
                        <div class="large-12 columns text-center">
                            <button class="yellow-background">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="apps-add-ons">
            <h3 class="text-center padding-bottom-30">B) Choose Extras</h3>
            <?php include('includes/apps-add-ons.php'); ?>
            <div class="text-center">
                <button class="yellow-background" id="next-step-button">Continue to Next Step</button>
            </div>
            <div id="device-discounts">
                <h3 class="white text-center padding-top-80 padding-top-30">
                    Our Device Discounts
                </h3>
                <img src="img/shared/white_close_icon.png" alt="" class="close-button">
                <?php include('includes/devices.php'); ?>
            </div>
        </div>
        
    </div><!-- #step-2 -->
    <div class="medium-blue-background padding-top-80 padding-bottom-80" id="step-3">
        <div class="row white">
            <div class="large-12 columns text-center padding-bottom-30">
                <h1>Step 3: 24/7 Support</h1>
            </div>
            <div class="small-12 large-6 columns hide-for-large-up text-center">
                <img src="img/get-started/support-mobile.png" alt="Image of customer service representative">
            </div>
            <div class="small-12 large-6 columns show-for-large-up text-center">
                <img src="img/get-started/support-desktop.png" alt="Image of customer service representative">
            </div>
            <div class="small-12 large-6 columns padding-top-30 padding-bottom-30">
                <h4>Great work! A dedicated success teammate will be in touch with you
                in the next 24 hours.</h4>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sit doloremque adipisci unde quo dolore sequi earum deserunt recusandae magni, a dolores, odit quod consectetur iusto quas aperiam officia optio.</h4>
            </div>
        </div>
    </div><!-- #step-3 -->
    
</div><!-- #get-started -->

<?php include('includes/footer.php'); ?>