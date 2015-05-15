<?php include('includes/header.php'); ?>
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
                    <input type="text" name="first_name" placeholder="First Name">
                    <input type="text" name="last_name" placeholder="Last Name">
                    <input type="email" name="email" placeholder="Email">
                    <input type="tel" name="phone_number" placeholder="Phone">
                    <input type="text" name="location" placeholder="Location">
                    <input type="text" name="organization" placeholder="Organization">
                    <button type="submit" class="yellow-background margin-top-15">Next</button>
                </form>
            </div>
        </div>
    </div><!-- #step-1 -->
    <div id="step-2" class="card-section padding-bottom-50 padding-top-50">
        <div class="row">
            <div class="large-12 columns relative">
                <h1 class="text-center padding-bottom-50">Step 2: Pick Your Perfect Plan</h1>

                <?php include('includes/plan-cards.php'); ?>
                
                <div class="row">
                    <div class="large-12 columns text-center">
                        <button class="yellow-background">Next</button>
                    </div>
                </div>
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

<?php include('includes/footer.php'); ?>