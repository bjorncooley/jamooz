<?php include('includes/header.php'); ?>

<div id="pricing">
    <div id="pricing-hero" class="padding-top-30 padding-bottom-15">
        <div class="row white">
            <div class="large-12 columns">
                <h1 class="large">Transparent Pricing<br />Customizable Plans</h1>
            </div>
            <div class="large-12 columns padding-top-30">
                <h4 class="light">Pricing should be both flexible to needs, and fair for 
                customers of all shapes and sizes. Transparency is what makes this possible.</h4>
            </div>
            <div class="large-12 columns text-center padding-top-30">
                <img src="img/shared/white_down_arrow.png" alt="">
            </div>
        </div>
    </div>
    <div id="base-plan" class="card-section padding-bottom-50 padding-top-50">
        <div class="row slide-container">
            <div class="large-12 columns relative slide">
                <h1 class="text-center padding-bottom-50 large no-text-transform">Choose a Base Plan</h1>
                <img src="img/shared/slider_left_arrow_black.png" alt="" class="left-arrow card-left-arrow">
                <img src="img/shared/slider_right_arrow_black.png" alt="" class="right-arrow card-right-arrow">

                    <?php include('includes/plan-cards.php'); ?>

                <div class="row">
                    <div class="large-12 columns text-center">
                        <button class="yellow-background">Continue with a Customer Success Teammate</button>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- #base-plan -->
    <div class="text-center padding-top-30 padding-bottom-50" id="extras-title">
        <div>
            <h1>Extras</h1>
        </div>
    </div>
    
    <?php include('includes/apps-add-ons.php'); ?>

    <div id="pricing-learn-sections">
        <div class="white teal-background padding-top-80 padding-bottom-80 text-center learn-section">
            <h4 class="white small-12 columns small-centered">
                <div class="padding-bottom-50">Learn what software works with Jamooz</div>
            </h4>
            <h4 class="white-border white padding-top-8 padding-bottom-8 max-285">See Software Integrations</h4>
        </div>
        <div class="white orange-background padding-top-80 padding-bottom-80 text-center learn-section">
            <h4 class="white">
                <div class="padding-bottom-50">Learn what hardware works with Jamooz</div>
            </h4>
            <h4 class="white-border white padding-top-8 padding-bottom-8 max-285">See Hardware Integrations</h4>
        </div>
    </div>

    <?php include('includes/trial.php'); ?>
</div>
<?php include('includes/footer.php'); ?>