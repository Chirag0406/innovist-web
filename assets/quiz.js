var startQuizBtn = $(".start-quiz");
var quizParameters = {};
var quizStartContainer = $(".quiz-start-container");
var genderContainer = $(".gender-container");
var controlsContainer = $(".controls-container");
var numberContainer = $(".number-container");
var resultContainer = $(".result-container");
var nextScreen = "screen2";
var previousScreen = "start";
var currentScreen = "screen1";
var quizProgress = "";
var prevBtn = $("#prev");
var nextBtn = $("#next");
var restartBtn = $("#restart");
var submitBtn = $("#submit");
var treatmentArray = [];
var hairMainGoalArray = [];
var skinFeelArray = [];
var skinConditionArray = [];
var facePrimaryArray = [];
var bodyPrimaryArray = [];
var progressBar = $("#progressBar");
var titleTwo = $("#titleTwo");
var errorLine = $("#errorLine");
var errorEmail = $("#errorEmail");
var productHandleForMoengage = [];
var productIdForMoengage = [];
var productTitleForMoengage = [];

//Hair Recommendation
var StrengthText =
  "Hair weakness can result from various factors, including diet deficiencies in essential nutrients like proteins, vitamins (such as biotin, A, C, and D), and minerals (like iron and zinc). Excessive heat styling and the prolonged use of chemical treatments like dyes, relaxers, and perms can also damage hair structure. Poor hair care practices, tight hairstyles, medical conditions, medications, stress, ageing, and environmental factors further contribute to weakened hair. Hence, to strengthen your hair, you need to maintain a balanced diet, stay hydrated, minimise heat styling, use sulfate-free shampoos, apply natural oil treatments, and protect from UV damage. Also, try to avoid tight hairstyles, trim split ends regularly, manage stress, limit chemical treatments, use wide-tooth combs on wet hair, and consider supplements like biotin if needed.";
var HydrationText =
  "Dry and rough hair can result from factors like low humidity, excessive sun exposure, over-shampooing, chemical treatments, heat styling, and poor nutrition. But you can maintain it by internal hydration through water intake and a nutrient-rich diet. Ensure to choose sulfate-free shampoos and limit washing to 2-3 times weekly with cool water. Use moisturising conditioners, heat protectants, and UV-resistant products. Along with it, avoid tight hairstyles and consider indoor humidifiers in dry environments.";
var LessFrizzText =
  "Frizzy and dull hair can result from damage to the hair's cuticle and environmental factors like humidity. To get rid of it, use sulfate-free, moisturising hair products, gentle combs, and microfiber towels. Apply leave-in conditioner and minimise heat styling, using protectant sprays when necessary. Silk or satin pillowcases can reduce friction. Do consider anti-frizz products in moderation and regular trims to prevent split ends for smoother, healthier hair.";
var SoftnessText =
  "Rough hair texture stems from genetic factors, environmental conditions, and hair care practices. For achieving soft, manageable hair, try using a sulfate-free shampoo, regular conditioning, and cool water rinses. Be gentle when drying and detangling, reduce heat styling, and protect with heat products. Consider silk or satin pillowcases, regular trims, deep conditioning, natural oils, UV protection, a balanced diet, and stress management for healthier hair.";
var VolumeText =
  "Thinning hair can result from genetics, ageing, hormonal fluctuations, nutrient deficiencies, medical conditions, medications, stress, and environmental factors. In this scenario, the use of volume-specific hair care products, root-lifting treatments, and styling tools can help provide volume to your hair. Layered haircuts and dry shampoo can also help maintain volume. A balanced diet, scalp massages, and reduced heat styling promote hair health. Silk or satin pillowcases, regular trims, volumizing hair spray, and lightweight natural oils can further enhance the appearance of fuller, more voluminous hair.";
var CurlsText =
  "Tangling in curly hair is influenced by its structural irregularities, moisture levels, and environmental factors. Hence, with the use of sulfate-free, moisturising hair products, and deep conditioning treatments, you can prevent as well as manage tangles. When detangling, start at the tips and work upward. Protective hairstyles and silk or satin pillowcases also play a vital role in reducing friction. Regular trims and a balanced moisture regimen can help maintain healthy curls.";
var DullText =
  "Dull hair can result from moisture loss, harsh products, heat styling, environmental factors, poor nutrition, and ageing. But you can restore the shine by hydrating your hair, eating a balanced diet, and using appropriate shampoo and conditioner. Finish this with a cool water rinse, minimized heat styling, and further apply natural oils for added shine. Consider vinegar rinses for buildup, use a wide-toothed comb, and silk or satin pillowcases to reduce friction. Go for deep conditioning while limiting shampooing to protect your hair from over-processing, UV rays. Also, get regular trims to avoid split ends and promote hair's natural lustre and vitality.";
var LongevityText =
  "To extend your hairstyle's longevity, use suitable hair products, ensure dry hair before styling, and apply heat protectant when using heated tools. Section your hair for better control and add a light-hold hairspray or styling product. Protect your hairstyle with a silk or satin pillowcase or loose wrap while sleeping, and carry a travel-sized hairspray for touch-ups. Consider weather conditions during styling, opt for regular trims, avoid excessive touching, and use dry shampoo for between wash refreshes.";
var HairfallControlText =
  "Hair fall, known as alopecia, has various causes. Genetic predisposition and hormonal fluctuations like pregnancy or thyroid disorders play a significant role. Medical conditions such as alopecia areata and medication side effects contribute, as does stress-related telogen effluvium. Inadequate hair care practices like tight hairstyles and chemical treatments lead to breakage. Autoimmune disorders and environmental factors, including pollution and UV radiation, weaken hair. Not only this, ageing also leads to hair thinning. Therefore, to address hair fall, maintain a nutrient-rich diet and use gentle hair care products. Avoid tight styles and excessive heat, and consider scalp massages and supplements under professional guidance. Protect hair from the sun, consult a dermatologist for persistent issues, trim regularly, and adopt a balanced lifestyle with sufficient sleep and stress management for overall hair health.";
var DandruffControlText =
  "Dandruff, a common scalp condition, is primarily caused by an overgrowth of the yeast-like fungus Malassezia, which thrives on scalp oils and can lead to skin irritation and increased cell turnover, resulting in flaking. Genetic factors and environmental conditions, like humidity and temperature, also contribute, with dandruff often worsening in warm, humid climates. Individual factors such as skin sensitivity and hair care habits can exacerbate symptoms. However, with the use of a specialised shampoo with anti-fungal and anti-inflammatory properties, you can maintain good scalp hygiene. Besides this, follow a balanced diet, manage stress, and use appropriate water temperature during hair washes for effective control.";
var ThermalProtectText =
  "Excessive use of high-temperature styling tools, such as hairdryers, straighteners, and curling irons, is the primary cause of heat damage to hair. Prolonged exposure weakens the hair's protein structure, leading to dryness, brittleness, and breakage. Heat-protectant products and low-heat settings are crucial for prevention. So, you should embrace heatless styling methods, ensure hair is fully dry before styling, and invest in quality tools. Regular trims, deep conditioning, and a silk or satin pillowcase can also promote hair health, while overall hydration and a balanced diet support resilience.";
var ColorProtectionText =
  "Hair colour fading, especially in colour-treated hair, results from various factors. Harsh shampoos with sulfates, excessive heat styling, sun exposure, hard water minerals, chlorine, and saltwater can all contribute. Chemical treatments, pollution, hair porosity, and natural growth away from the scalp also play a role. To protect colour-treated hair, use specialized colour-protecting products, rinse with cold water to seal the cuticle, reduce shampoo frequency with sulfate-free options, and employ dry shampoo between washes. Be cautious with heat styling, shield hair from UV radiation with hats or UV-filtering products, minimise exposure to pools and saltwater, and rinse thoroughly afterwards. Regular deep conditioning, trims to prevent split ends, and touch-up treatments can also help maintain hair colour.";
var HairGrowthText =
  "Hair growth stagnation, where hair doesn't seem to lengthen, results from a complex interplay of genetic factors, age-related changes, hormonal fluctuations, and nutrition. Hence, to promote robust hair growth, maintain a well-balanced diet rich in hair-nourishing nutrients, and take care of your scalp by avoiding overwashing. Regular trims would also help prevent split ends, and minimising heat styling and tight hairstyles would be beneficial for the protection of your hair. Additionally, prioritise stress management and gentle hair care practices, and consider silk or satin pillowcases to reduce friction for healthier hair growth.";

var Strength1 = ["expert-damage-repair-shampoo-hairmask-serum"];
var Strength2 = [
  "expert-damage-repair-shampoo",
  "expert-series-damage-repair-hair-mask-1",
  "expert-series-damage-repair-serum",
];
var Hydration1 = ["expert-anti-frizz-shampoo-hairmask-kit"];
var Hydration2 = [
  "expert-anti-frizz-shampoo",
  "expert-series-anti-frizz-hair-mask",
  "anti-frizz-leave-in-conditioner",
];
var LessFrizz1 = ["expert-anti-frizz-shampoo-hairmask-kit"];
var LessFrizz2 = [
  "expert-anti-frizz-shampoo",
  "expert-series-anti-frizz-hair-mask",
  "anti-frizz-leave-in-conditioner",
];
var Softness1 = ["expert-ultra-smoothing-shampoo-hair-mask-hair-serum-kit"];
var Softness2 = [
  "expert-ultra-smoothing-shampoo",
  "expert-ultra-smoothing-mask",
  "expert-series-ultra-smoothing-serum",
];
var Volume1 = ["expert-volumizing-shampoo-hair-mask-kit"];
var Volume2 = [
  "expert-volumizing-shampoo",
  "expert-volumizing-hair-mask",
  "anti-hair-fall-tonic",
];
var Curls1 = ["copy-of-curly-range-kit-2"];
var Curls2 = [
  "curl-defining-shampoo",
  "curl-enhancing-hair-mask",
  "curl-intensifying-leave-in-conditioner",
  "curl-defining-gel",
];
var Dull1 = ["expert-ultra-smoothing-shampoo-hair-mask-hair-serum-kit"];
var Dull2 = [
  "expert-ultra-smoothing-shampoo",
  "expert-ultra-smoothing-mask",
  "expert-series-ultra-smoothing-serum",
];
var Longevity1 = ["hair-wax"];
var Longevity2 = [
  "expert-heat-protection-spray",
  "anti-frizz-leave-in-conditioner",
];
//copy-of-anti-hair-fall-kit-br-mask-shampoo-serum-1
var HairfallControl1 = ["anti-hair-fall-kit-br-mask-shampoo-serum-tonic"];
var HairfallControl2 = [
  "anti-hairfall-shampoo",
  "anti-hairfall-hair-mask",
  "anti-hairfall-serum",
  "anti-hair-fall-tonic",
];
var DandruffControl1 = ["anti-dandruff-kit-br-shampoo-mask-tonic"];
var DandruffControl2 = [
  "expert-scalp-scrub",
  "expert-anti-dandruff-shampoo",
  "anti-dandruff-mask",
  "anti-dandruff-hair-tonic",
];
var ThermalProtect1 = ["expert-heat-protection-spray"];
var ThermalProtect2 = [];
var ColorProtection1 = ["expert-color-protect-shampoo-hair-mask-kit"];
var ColorProtection2 = [
  "expert-color-protect-shampoo",
  "expert-color-protect-mask",
];
var HairGrowth1 = ["anti-hair-fall-kit-br-mask-shampoo-serum-tonic"];
var HairGrowth2 = [
  "anti-hair-fall-tonic",
  "hair-growth-deep-nourishment-hair-oil",
];
var NoConcernHair1 = [
  "expert-ultra-smoothing-shampoo-hair-mask-hair-serum-kit",
  "expert-ultra-smoothing-shampoo",
  "expert-ultra-smoothing-mask",
  "expert-series-ultra-smoothing-serum",
];
var NoConcernHair2 = [
  "expert-ultra-smoothing-shampoo",
  "expert-ultra-smoothing-mask",
  "expert-series-ultra-smoothing-serum",
];

//Face Recommendation
var SensitivityText =
  "Sensitive skin is prone to redness, itching, and discomfort due to genetic predisposition and environmental factors like weather, pollution, diet, and skincare choices. To manage it use ceramides and fatty acids to fortify the skin's natural barrier. Also, use oils and serums for essential nutrients and moisture, promoting resilience. Along with it, use SPF 30+ broad-spectrum sunscreen to shield from UV rays, preventing sensitivity exacerbation. Apply hypoallergenic moisturiser twice daily to lock in moisture and reduce irritation. Lastly, drink enough water for overall skin health and resilience.";
var RednessText =
  "Skin redness or erythema results from blood vessel dilation near the skin's surface, often due to allergies, infections, or environmental factors like extreme temperatures, wind, sunburn, or pollutants that can induce temporary redness. Sensitive skin is more prone to redness. So, to manage redness, you should use products with ceramides, hyaluronic acid, glycerin, and niacinamide as they can calm redness and promote long-term skin health. Also, apply SPF 30+ broad-spectrum sunscreen to prevent UV-induced redness. Make sure to avoid skincare products with harsh ingredients, fragrances, and alcohol. For quick relief from inflammation, you can use a cool, damp cloth or compress. Drink enough water to keep yourself hydrated to improve overall skin health.";
var FineLinesText =
  "Fine lines and wrinkles, scientifically known as rhytides, results of natural ageing, occur due to collagen decline, UV exposure, smoking, and facial expressions. So, to avoid it, add a SPF 30+ sunscreen to your daily routine to shield against UV radiation. While at night time, apply a moisturiser with Niacinamide for anti-inflammatory effects, Retinol for collagen stimulation, and Vitamins E and C for antioxidants. Use a ceramide-based hydrating cream for the delicate eye area. Most importantly, maintain a balanced diet rich in antioxidants and drink plenty of water to support skin health. Don’t forget to ensure that your skin is well-hydrated by using a quality moisturiser regularly.";
var LossFirmnessText =
  "Loss of firmness, scientifically referred to as skin laxity or elastosis is the skin's reduced ability to maintain its tautness and resilience, resulting in sagging, wrinkles, and a less youthful appearance. Intrinsic ageing, coupled with factors like UV exposure, smoking, and lifestyle choices, accelerates this process, emphasising the importance of proactive measures. Therefore, to combat it, daily apply sunscreen of SPF 30 or higher as it shields against UV radiation, a major contributor to sagging skin. Integrate retinoids like retinol to stimulate collagen, improve skin texture, and reduce fine lines. Use products containing Alpha Hydroxy Acids or (AHAs) to exfoliate and promote new, firmer skin cells, enhancing skin texture. Use a moisturiser with hyaluronic acid for plump, youthful skin, and include antioxidants like vitamins C and E to safeguard collagen. You can even Instantly plump skin by applying a hyaluronic acid serum that retains moisture and minimises fine lines. Lastly, avoid smoking, limit alcohol, and reduce exposure to pollutants to slow skin ageing.";
var HyperpigmentationText =
  "Hyperpigmentation is the darkening of the skin due to excess melanin, leading to uneven tone and blemishes. It results from genetics, hormones, and sun exposure.  Therefore, look for products with ingredients like hydroquinone, niacinamide, vitamin C, and AHAs for melanin control and skin exfoliation. Prioritise gentle cleansing to prevent skin irritation that can worsen hyperpigmentation. Consistency in skincare and sun protection is key to managing and preventing further pigmentation issues. Prioritize gentle cleansing to avoid skin irritation that can exacerbate post-inflammatory hyperpigmentation.";
var AcneText =
  "Acne or acne vulgaris is a skin condition characterized by clogged follicles, leading to pimples, nodules, and cysts. It results from increased sebum production, abnormal skin cell shedding, bacterial colonization, and inflammation. For managing acne, maintain a gentle cleansing routine to remove impurities without over-drying the skin, especially focusing on scalp and hair hygiene. Use products with salicylic acid for pore exfoliation, kojic acid to lighten dark spots and glycolic acid for overall skin texture improvement. Along with this, adding Vitamin C can help combat oxidative stress, even skin tone, and stimulate collagen production. Consider collagen supplements to support skin elasticity and hydration from within.";
var DrynessText =
  "Dry skin, scientifically termed xerosis or xeroderma, results from moisture and lipid deficiency in the skin's outer layer, causing flakiness, itchiness, and discomfort. Intrinsic factors like genetics and age-related moisture, and environmental factors such as low humidity and harsh skincare worsen it. However, you can easily manage it by using gentle, fragrance-free cleansers and moisturisers with ceramides, glycerin, and hyaluronic acid. Protect skin from UV damage with SPF 30+ sunscreen, maintain a diet rich in essential fatty acids and vitamins, and stay well-hydrated.";
var SunDamageText =
  "Sun-damaged skin, caused by UV radiation, results in visible changes like wrinkles and hyperpigmentation due to collagen and elastin degradation. Thus, applying SPF 30+ sunscreen daily is recommended. Do apply vitamin C for antioxidant protection. Consider retinoids like retinol for collagen. Stay hydrated and maintain a skin-supporting diet. However, consult a dermatologist for personalized advice and advanced treatments.";
var DullnessText =
  "Dull skin, scientifically characterised by reduced radiance and an uneven complexion, can result from ageing and external factors like UV exposure and pollution. So, to rejuvenate your complexion, include exfoliants and antioxidants in your skincare routine. Also, stay well-hydrated, and protect your skin from the sun by using sunscreen. Maintaining a nutrient-rich diet, adopting a healthy lifestyle, and consulting a dermatologist for persistent dullness can all contribute to a brighter and more vibrant appearance.";
var NoConcernFaceText = "";

var Sensitivity1 = ["gentle-hydrating-face-cleanser"];
var Sensitivity2 = ["under-eye-cream", "hydrating-moisturizer"];
var Redness1 = ["gentle-hydrating-face-cleanser"];
var Redness2 = [
  "hyaluronic-acid-niacinamide-hydrating-face-serum",
  "hydrating-moisturizer",
];
var FineLines1 = ["under-eye-cream"];
var FineLines2 = [];
var LossFirmness1 = ["under-eye-cream"];
var LossFirmness2 = [];
var Hyperpigmentation1 = ["exfoliating-peeling-solution"];
var Hyperpigmentation2 = [
  "vitamin-c-hyaluronic-brightening-serum",
  "daily-sunscreen",
  "3-tranexamic-acid-5-niacinamide-hyperpigmentation-face-serum",
];
var Acne1 = ["azelaic-acid-niacinamide-acne-control-serum"];
var Acne2 = ["oil-acne-control-face-wash", "acne-control-moisturizers"];  ///nahi aaye
var Dryness1 = ["gentle-hydrating-face-cleanser"];  ///Nahi aaya
var Dryness2 = [
  "under-eye-cream",
  "hyaluronic-acid-niacinamide-hydrating-face-serum",
  "hydrating-fluid-sunscreen-for-face-and-body-spf-60-pa",
  "hydrating-moisturizer",
];
var SunDamage1 = ["hydrating-fluid-sunscreen-for-face-and-body-spf-60-pa"];
var SunDamage2 = [
  "invisible-sunscreen-spf-40",
  "glow-sunscreen-spf-60",
  "daily-sunscreen",
  "mineral-sunstick-sunscreen",
  "brightening-day-cream-with-spf",
];
var Dullness1 = ["oil-acne-control-face-wash"];
var Dullness2 = [
  "brightening-day-cream-with-spf",
  "vitamin-c-hyaluronic-brightening-serum",
  "brightening-day-cream-with-spf",
];
var NoConcernFace1 = [
  "gentle-hydrating-face-cleanser",
  "hydrating-fluid-sunscreen-for-face-and-body-spf-60-pa",
  "hydrating-moisturizer",
];
var NoConcernFace2 = [
  "hydrating-fluid-sunscreen-for-face-and-body-spf-60-pa",
  "hydrating-moisturizer",
];

//Body Recommendation
var AgeingText =
  "Body skin ageing or cutaneous ageing is influenced by genetics, natural ageing, and environmental factors like UV exposure and pollution. This leads to wrinkles, sagging, and reduced firmness. To counteract these effects, prioritise daily SPF protection, use antioxidants (vitamins C and E) to combat free radicals, and maintain skin hydration with regular moisturisation. Do consider retinoid-based products for collagen stimulation. Choose gentle, sulfate-free cleansers, adopt a healthy lifestyle with a nutrient-rich diet, stay hydrated, exercise regularly, and get sufficient sleep. Additionally, consulting a dermatologist for personalized guidance and advanced treatments can effectively manage body skin ageing.";
var AcneBodyText =
  "Body acne, known as truncal acne, affects areas like the back, chest, and shoulders, with comedones, papules, pustules, and sometimes nodules and cysts. It results from factors like excess sebum production influenced by hormones and genetics, dead skin cell accumulation, and bacterial overgrowth. Friction, sweating, and humidity worsen it, with hormonal fluctuations, especially in adolescents and women, triggering breakouts. Hence, to manage it, use a mild cleanser, add topical treatments with ingredients like benzoyl peroxide or salicylic acid, opt for breathable clothing, and consult a dermatologist for severe cases and personalised treatments, including oral medications.";
var DrynessBodyText =
  "Body dryness, or xerosis cutis, is marked by insufficient skin moisture, resulting in dry, rough, and often itchy skin due to a compromised lipid barrier. Environmental stressors like low humidity and extreme temperatures, excessive hot water bathing, ageing, hormonal changes, and medical conditions contribute to dryness. Genetic predisposition and certain medications can worsen it. Therefore, you should adopt gentle cleansing with mild, fragrance-free cleansers, apply moisturisers with emollients and humectants like glycerin and hyaluronic acid after bathing, and maintain overall hydration. Use humidifiers indoors, wear protective clothing in extreme weather, and follow a diet rich in essential fatty acids, vitamins, and antioxidants to support skin health. Lastly, avoid harsh soaps and excessive exfoliation to prevent further dryness.";
var BumpyText =
  "Keratosis pilaris (KP), often called strawberry skin, is marked by small, raised, rough bumps on arms, thighs, or cheeks due to keratin buildup in hair follicles. It has a genetic component and worsens in dry conditions. However, it can be controlled by using gentle, fragrance-free cleansers and lukewarm water for cleansing, and exfoliating with products containing alpha hydroxy acids (AHAs) or beta hydroxy acids (BHAs) to alleviate blockages. Also, look for moisturisers enriched with urea, lactic acid, or ceramide. Consult a dermatologist for prescription retinoid creams, avoid harsh soaps and over-scrubbing, introduce humidifiers in dry environments, maintain a balanced diet and keep yourself hydrated. Lastly, protect the skin with broad-spectrum sunscreen. ";
var StretchmarksText =
  "Stretch marks, or striae distensae, are characterised by discoloured, slightly depressed streaks on the skin, resulting from rapid stretching and collagen/elastin fibre breakdown. They can occur due to pregnancy, weight changes, hormonal shifts, or genetics. So, consider topical treatments with hyaluronic acid, retinoids like tretinoin, or peptides to stimulate collagen and improve skin elasticity. Keep the skin well-hydrated with emollient-rich products and maintain a stable body weight to prevent new stretch marks. Supporting overall skin health through a balanced diet and hydration can aid in skin elasticity, reducing the appearance of stretch marks.";
var SunDamageBodyText =
  "Sun damage on the body, caused by excessive sun exposure and harmful UV radiation, leads to issues like sunburn, premature aging, and skin cancer risk. It results in visible signs such as hyperpigmentation, fine lines, wrinkles, and uneven skin texture. Protecting against sun damage requires a comprehensive approach so apply SPF 30+ broad-spectrum sunscreen daily, reapply when outdoors, and wear protective clothing and sunglasses. Seek shade, avoid tanning beds, and monitor skin changes. Drink lots of water, use antioxidants like vitamin C, and consider dermatologist-prescribed skincare, including retinoids. You can even Schedule skin cancer screenings, especially if exposed to the sun extensively.";
var DullnessBodyText =
  "Dull body skin, lacking radiance and appearing rough, results from dead skin cell buildup, reduced collagen, and external factors. Pollution, UV radiation, dehydration, poor nutrition, and smoking also contribute to this dullness. But you can rejuvenate it by exfoliating regularly with alpha hydroxy acids (AHAs) or beta hydroxy acids (BHAs), hydrating using glycerin and hyaluronic acid, and applying daily broad-spectrum sunscreen. Include vitamin C for antioxidant protection, stay hydrated, maintain a balanced diet, quality sleep, and stress management to enhance skin vibrancy.";

var Ageing1 = ["anti-aging-body-lotion"];
var Ageing2 = ["stretch-marks-scar-fading-oil"];
var AcneBody1 = ["3-pentavitin-1-salicylic-acid-acne-control-body-wash"];
var AcneBody2 = [];
var DrynessBody1 = ["daily-hydrating-body-lotion"];
var DrynessBody2 = [
  "spf-body-lotion-spf-15-180-gm",
  "foot-cream-for-cracked-heel-diabetic-foot",
];
var Bumpy1 = ["lactic-acid-zemea-vitamin-e-exfoliating-body-wash"]; /// Nahi aaya
var Bumpy2 = ["exfoliating-body-scrub"];
var Stretchmarks1 = ["stretch-marks-scar-fading-oil"];
var Stretchmarks2 = [];
var SunDamageBody1 = ["invisible-body-sunscreen-spf-60-125-ml"];
var SunDamageBody2 = [
  "spf-body-lotion-spf-15-180-gm",
  "hydrating-fluid-sunscreen-for-face-and-body-spf-60-pa",
];
var DullnessBody1 = ["neck-knee-elbow-brightening-roll-on-1"];
var DullnessBody2 = [
  "underarm-roll-on",
  "copy-of-brightening-body-lotion-for-all-skin-types",
];
var NoConcernBody1 = [
  "daily-hydrating-body-lotion",
  "hydrating-fluid-sunscreen-for-face-and-body-spf-60-pa",
  "underarm-roll-on",
];
var NoConcernBody2 = [
  "hydrating-fluid-sunscreen-for-face-and-body-spf-60-pa",
  "underarm-roll-on",
];

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

startQuizBtn.click(function () {
  quizStartContainer.hide();
  genderContainer.show();
  controlsContainer.show();
  progressBar.show();
});

prevBtn.click(function () {
  //if (previousScreen == "screen2"){
  //  progressBar.hide();
  //}
  var totalRequired = $(`#${previousScreen}`).data("selection");
  //console.log("totalRequired", totalRequired);

  if (totalRequired > 1) {
    prevBtn.css("width", "46%");
    nextBtn.show();
  } else {
    nextBtn.hide();
    prevBtn.css("width", "98%");
  }

  if (previousScreen == "start") {
    nextScreen = "screen2";
    previousScreen = "start";
    currentScreen = "screen1";
    controlsContainer.hide();
    progressBar.hide();
    progressBar[0].setAttribute("value", 0);
    $(`#${currentScreen}`).hide();
    $(`#${previousScreen}`).show();
  } else {
    $(`#${currentScreen}`).hide();
    $(`#${previousScreen}`).show();
    nextScreen = currentScreen;
    currentScreen = previousScreen;
    var prevoiousScreenNow = $(`#${currentScreen}`).attr("data-previous");
    previousScreen = prevoiousScreenNow;
  }
});

nextBtn.click(function () {
  //var totalRequired = $(`#${nextScreen}`).parent().parent().parent().data("selection");
  //console.log(totalRequired);
  var totalRequired = $(`#${nextScreen}`).data("selection");
  //console.log("totalRequired", totalRequired);

  if (totalRequired > 1) {
    prevBtn.css("width", "46%");
    nextBtn.show();
  } else {
    nextBtn.hide();
    prevBtn.css("width", "98%");
  }
  //if (currentScreen == "screen2"){
  //  progressBar.show();
  //}
  var currentInput = $(`#${currentScreen}`).attr("data-input");
  if ($(`input[name="${currentInput}"]`).is(":checked")) {
    errorLine.hide();
  } else {
    errorLine.show();
    return;
  }
  $(`#${currentScreen}`).hide();
  quizProgress = $(`#${currentScreen}`).attr("data-progress");
  progressBar[0].setAttribute("value", quizProgress);

  previousScreen = currentScreen;
  currentScreen = nextScreen;
  if (nextScreen == "hair-skin") {
    var selectedQuizType = $('input[name="quizType"]:checked').val();
    if (selectedQuizType == "HAIRCARE") {
      nextScreen = "hair1";
    } else {
      nextScreen = "skin1";
    }
    currentScreen = nextScreen;
    $(`#${currentScreen}`).show();

    //alert(selectedQuizType);
  } else if (nextScreen == "numberContainer") {
    controlsContainer.hide();
    numberContainer.show();
  } else if(nextScreen == "resultContainer"){
    controlsContainer.hide();
    formSubmitted();
  } else {
    $(`#${nextScreen}`).show();
  }

  var nextScreenNow = $(`#${currentScreen}`).attr("data-next");
  nextScreen = nextScreenNow;

  var $bar = $(".ProgressBar");
  if ($bar.children(".is-current").length > 0) {
    $bar
      .children(".is-current")
      .removeClass("is-current")
      .addClass("is-complete")
      .next()
      .addClass("is-current");
  } else {
    $bar.children().first().addClass("is-current");
  }
});

restartBtn.click(function () {
  $(`#${currentScreen}`).hide();
  quizStartContainer.show();
  controlsContainer.hide();
  nextScreen = "screen2";
  previousScreen = "start";
  currentScreen = "screen1";
});

function formSubmitted(){
    //if (isEmail($("#userEmail").val())) {
    //errorEmail.hide();
  //} else {
    //errorEmail.show();
    //return;
  //}
  //quizParameters.userEmail = $("#userEmail").val();
  //numberContainer.hide();
  progressBar.hide();
  resultContainer.show();
  getProductRecommendation();
}

submitBtn.click(function () {
  if (isEmail($("#userEmail").val())) {
    errorEmail.hide();
  } else {
    errorEmail.show();
    return;
  }
  quizParameters.userEmail = $("#userEmail").val();
  numberContainer.hide();
  progressBar.hide();
  resultContainer.show();
  getProductRecommendation();
});

function getProductRecommendation() {
  //debugger;
  if (quizParameters.quizType == "HAIRCARE") {
    console.log("MOengage Started");

    console.log("MOengage End");

    $(".concern").text("hair");
    $(".concernType").text(quizParameters.hairType);
    var priority1 = $(`input#${quizParameters.hairMainGoal[0]}`).siblings()[1];
    if ($(priority1).text().trim().includes("concern")) {
      $(".result-text").html(
        'SINCE YOU HAVE <span class="concernType">' +
          quizParameters.hairType +
          "</span> HAIR TYPE AND ARE NOT DEALING WITH ANY CONCERNS (THANKFULLY!), YOU ONLY NEED TO TAKE CARE OF YOUR HAIR IN THE BEST POSSIBLE WAY."
      );
      //$('.accordion').hide();
      getHaircareProductForSectionOne();
      $("#concernTitle1").text("Hair Maintainance");
      $("#concernText1").text(
        "Hurray! Since you have flawless hair, without any concerns - lets try to maintain that to the best of our abilities. Your hair is doing all good on its own and just requires basic steps of care to remain such in the long term as well."
      );
      $("#concernTitle2").parent().parent().hide();
      return;
    }
    if (typeof quizParameters.hairMainGoal[1] != "undefined") {
      var priority2 = $(
        `input#${quizParameters.hairMainGoal[1]}`
      ).siblings()[1];
      //var recoText =
      //  "We understand that you have " +
      //  quizParameters.hairType +
      //  " hair and your primary concerns are " +
      //  priority1 +
      //  " and " +
      //  priority2 +
      //  ". We have done the best possible analysis for you and thus, recommend you these!";

      $(".selectedParameter").text(
        $(priority1).text().trim() + " and " + $(priority2).text().trim() + "."
      );
      //$("#recoText").text(recoText);
    } else {
      console.log(priority1);
      //var recoText =
      //  "We understand that you have " +
      //  quizParameters.hairType +
      //  " hair and your primary concerns is " +
      //  priority1 +
      //  ". We have done the best possible analysis for you and thus, recommend you these!";
      //$("#recoText").text(recoText);
       $(".selectedParameter").text(
        $(priority1).text().trim() + "."
      );
      $("#concernTitle2").parent().parent().hide();
      
    }
    getHaircareProductForSectionOne();
    getHaircareProductForSectionTwo();

    setTimeout(function (e) {
      Moengage.track_event("Quiz", {
        email: quizParameters.userEmail,
        gender: quizParameters.gender,
        quizType: quizParameters.quizType,
        texture: quizParameters.texture,
        hairType: quizParameters.hairType,
        scalpType: quizParameters.scalpType,
        hairMainGoal: quizParameters.hairMainGoal.toString(),
        productHandle: productHandleForMoengage.toString(),
        productId : productIdForMoengage.toString(),
        productTitle : productTitleForMoengage.toString()
      });
    }, 3000);
  } else {
    
    $(".concern").text("skin");
    $(".concernType").text(quizParameters.skinType);

    var facePriority1 = $(
      `input#${quizParameters.facePrimary[0]}`
    ).siblings()[1];
    var bodyPriority1 = $(
      `input#${quizParameters.bodyPrimary[0]}`
    ).siblings()[1];

    if (
      $(facePriority1).text().trim().includes("concern") &&
      $(bodyPriority1).text().trim().includes("concern")
    ) {
      var result_text =
        'SINCE YOU HAVE <span class="concernType">' +
        quizParameters.skinType +
        "</span> SKIN TYPE AND ARE NOT DEALING WITH ANY CONCERNS (THANKFULLY!) FOR YOUR FACE, YOU ONLY NEED TO TAKE CARE OF YOUR SKIN IN THE BEST POSSIBLE WAY.";
      $(".result-text").html(result_text);
      getSkincareProductForSectionOne();
      getSkincareProductForSectionTwo();
      $("#concernTitle1").text("Skin Maintainance");
      $("#concernText1").text(
        "Hurray! Since you have flawless skin, without any concerns - lets try to maintain that to the best of our abilities. Your skin is doing all good on its own and just requires basic steps of care to remain such in the long term as well. "
      );
      $("#concernTitle2").parent().parent().hide();
      return;
    }

    //quizParameters.skinType
    var facePriority2 = null;
    var bodyPriority2 = null;
    var recoText = "";

    if (typeof quizParameters.facePrimary[1] != "undefined") {
      facePriority2 = $(`input#${quizParameters.facePrimary[1]}`).siblings()[1];
    }

    if (typeof quizParameters.bodyPrimary[1] != "undefined") {
      bodyPriority2 = $(`input#${quizParameters.bodyPrimary[1]}`).siblings()[1];
    }

    if ($(facePriority1).text().trim().includes("concern")) {
      var resultText =
        'SINCE YOU HAVE <span class="concernType">' +
        quizParameters.skinType +
        "</span> SKIN TYPE AND ARE NOT DEALING WITH ANY CONCERNS (THANKFULLY!) FOR YOUR FACE, YOU ONLY NEED TO TAKE CARE OF YOUR SKIN IN THE BEST POSSIBLE WAY. ";
      resultText += `However you are struggling with <span class="selectedParameter">${$(
        bodyPriority1
      )
        .text()
        .trim()} ${
        bodyPriority2 ? ` and ${$(bodyPriority2).text().trim()}` : ""
      }
          </span> for your body, we have made the best analysis for your concerns and came up with these suggestions!`;
      $(".result-text").html(resultText);
      getSkincareProductForSectionOne();
      getSkincareProductForSectionTwo();
      $("#concernTitle1").text("Skin Maintainance");
      $("#concernText1").text(
        "Hurray! Since you have flawless skin, without any concerns - lets try to maintain that to the best of our abilities. Your skin is doing all good on its own and just requires basic steps of care to remain such in the long term as well. "
      );
      //$('#concernTitle2').parent().parent().hide();
      return;
    }

    //console.log(facePriority2);
    if ($(bodyPriority1).text().trim().includes("concern")) {
      var resultText =
        'SINCE YOU HAVE <span class="concernType">' +
        quizParameters.skinType +
        " </span>SKIN TYPE AND ARE NOT DEALING WITH ANY CONCERNS (THANKFULLY!) FOR YOUR BODY, YOU ONLY NEED TO TAKE CARE OF YOUR SKIN IN THE BEST POSSIBLE WAY. ";
      resultText += `However you are struggling with <span class="selectedParameter">${$(
        facePriority1
      )
        .text()
        .trim()}
          ${$(facePriority1).text().trim()} ${
        facePriority2 ? ` and ${$(facePriority2).text().trim()}` : ""
      }
      </span> for your face, we have made the best analysis for your concerns and came up with these suggestions!`;
      $(".result-text").html(resultText);
      getSkincareProductForSectionOne();
      getSkincareProductForSectionTwo();
      $("#concernTitle2").text("Skin Maintainance");
      $("#concernText2").text(
        "Hurray! Since you have flawless skin, without any concerns - lets try to maintain that to the best of our abilities. Your skin is doing all good on its own and just requires basic steps of care to remain such in the long term as well. "
      );
      //var accordian = $('.result-wrapper .accordion')
      //$('#concernTitle2').parent().parent().hide();
      return;
    }

    facePriority1 = $(facePriority1).text().trim();
    facePriority2 = $(facePriority2).text().trim();
    bodyPriority1 = $(bodyPriority1).text().trim();
    bodyPriority2 = $(bodyPriority2).text().trim();
    var sameName = "";
    //debugger;
    if (facePriority1 === bodyPriority1) {
      sameName = facePriority1;
      //facePriority1 = `Face - ${facePriority1}`;
      //bodyPriority1 = `Body - ${bodyPriority1}`;
    } else if (facePriority1 === bodyPriority2) {
      sameName = facePriority1;
      //facePriority1 = `Face - ${facePriority1}`;
      //bodyPriority2 = `Body - ${bodyPriority2}`;
    } else if (bodyPriority1 === facePriority2) {
      sameName = facePriority2;
      //facePriority2 = `Face - ${facePriority2}`;
      //bodyPriority1 = `Body - ${bodyPriority1}`;
    } else if (
      facePriority2 === bodyPriority2 &&
      facePriority2 != "" &&
      bodyPriority2 != ""
    ) {
      sameName = facePriority2;
      //facePriority2 = `Face - ${facePriority2}`;
      //bodyPriority2 = `Body - ${bodyPriority2}`;
    }

    $(".result-text")
      .html(`Since you have <span class="concernType">${quizParameters.skinType}</span> 
    skin type and are struggling with <span class="selectedParameter">${facePriority1} and ${facePriority2}</span> 
    for your face & <span class="selectedParameter">${bodyPriority1} and ${bodyPriority2}</span> 
    for your body, we have made the best analysis for your concerns and came up with these suggestions!`);

    getSkincareProductForSectionOne(sameName);
    getSkincareProductForSectionTwo(sameName);

    setTimeout(function (e) {
      Moengage.track_event("Quiz", {
        email: quizParameters.userEmail,
        gender: quizParameters.gender,
        quizType: quizParameters.quizType,
        skinFeel: quizParameters.skinFeel.toString(),
        skinType: quizParameters.skinType,
        facePrimary: quizParameters.facePrimary.toString(),
        bodyPrimary: quizParameters.bodyPrimary.toString(),
        productHandle: productHandleForMoengage.toString(),
        productId : productIdForMoengage.toString(),
        productTitle : productTitleForMoengage.toString()
      });
    }, 3000);
    console.log("Moengage end");
    
  }
}

function getHaircareProductForSectionOne() {
  var selectedParameter1 = quizParameters.hairMainGoal[0] + "1";
  var selectedParameter1Text = quizParameters.hairMainGoal[0] + "Text";
  $("#expert1").html(window[selectedParameter1Text]);
  //$('#concernTitle1').text(quizParameters.hairMainGoal[0]);
  var concernTitle1 = $(
    `input#${quizParameters.hairMainGoal[0]}`
  ).siblings()[1];
  if ($(concernTitle1).text().trim() == "") {
    $("#concernTitle1").hide();
    $("#concernText1").hide();
  } else {
    $("#concernTitle1").text($(concernTitle1).text().trim());
    $("#concernText1").html(window[selectedParameter1Text]);
  }
  var mergedArr = [];
  if (typeof quizParameters.hairMainGoal[1] != "undefined") {
    var concernTitle2 = $(
      `input#${quizParameters.hairMainGoal[1]}`
    ).siblings()[1];
    $("#concernTitle2").text($(concernTitle2).text().trim());
    //$('#concernTitle2').text(quizParameters.hairMainGoal[1]);
    var selectedParameter2 = quizParameters.hairMainGoal[1] + "1";
    var selectedParameter2Text = quizParameters.hairMainGoal[1] + "Text";
    let arr = [...window[selectedParameter1], ...window[selectedParameter2]];
    mergedArr = [...new Set(arr)];
    $("#expert2").html(window[selectedParameter2Text]);
    $("#concernText2").html(window[selectedParameter2Text]);
  } else {
    mergedArr = window[selectedParameter1];
  }

  $(mergedArr).each(function (index, data) {
    jQuery.ajax({
      type: "GET",
      url: "/products/" + data + ".json",
      success: function (response) {
        var product = response.product;
        //console.log(product);

        productHandleForMoengage.push(product.handle);
        productIdForMoengage.push(product.id);
        productTitleForMoengage.push(product.title);

        var product_html = "";
        if (product.variants[0].compare_at_price == product.variants[0].price) {
          product_html =
            '<div class="grid-item grid-product" data-product-handle="' +
            product.handle +
            '" data-product-id="' +
            product.id +
            '"><div class="grid-item__content"><div class="grid-product__image-wrap" onclick="myFunction(/products/' +
            product.handle +
            ')"><div style="height: 0; padding-bottom:100%;"><img class="grid__image-contain" src="' +
            product.image.src +
            '" /></div><div class="grid-product__title text-center" onclick="myFunction(/products/' +
            product.handle +
            ')"><a href="/products/' +
            product.handle +
            '" class="grid-item__link">' +
            product.title +
            '</a></div></div><div class="grid-item__meta-secondary"><div class="grid-product__price">' +
            '<span class="grid-product__price--current"><span aria-hidden="true" class="grid-product__price--from">' +
            product.variants[0].price +
            '</span><span class="visually-hidden">' +
            product.variants[0].price +
            "</span></span>" +
            '</div><div class="button_group" onclick="(event) => event.stopPropogation();" style="display: flex;">' +
            '<button class="shop-now text-link quick-add-btn js-quick-add-btn ' +
            product.available +
            '" onclick="addProductToMiniCart(event,' +
            product.variants[0].id +
            ', this)" data-id="' +
            product.variants[0].id +
            '">ADD TO CART</button></div></div></div></div>';
        } else {
          product_html =
            '<div class="grid-item grid-product" data-product-handle="' +
            product.handle +
            '" data-product-id="' +
            product.id +
            '"><div class="grid-item__content"><div class="grid-product__image-wrap" onclick="myFunction(/products/' +
            product.handle +
            ')"><div style="height: 0; padding-bottom:100%;"><img class="grid__image-contain" src="' +
            product.image.src +
            '" /></div><div class="grid-product__title text-center" onclick="myFunction(/products/' +
            product.handle +
            ')"><a href="/products/' +
            product.handle +
            '" class="grid-item__link">' +
            product.title +
            '</a></div></div><div class="grid-item__meta-secondary">' +
            '<div class="grid-product__price"><span class="visually-hidden">Regular price</span><span class="grid-product__price--original">' +
            '<span aria-hidden="true">₹' +
            product.variants[0].compare_at_price +
            "</span>" +
            '<span class="visually-hidden">₹ ' +
            product.variants[0].compare_at_price +
            "</span></span> " +
            '<span class="grid-product__price--current"><span aria-hidden="true">₹' +
            product.variants[0].price +
            '</span><span class="visually-hidden">₹' +
            product.variants[0].price +
            "</span></span>" +
            '<strong>|<span class="percentage_off">' +
            (
              ((product.variants[0].compare_at_price -
                product.variants[0].price) /
                product.variants[0].compare_at_price) *
              100
            ).toFixed() +
            "% OFF</span></strong></div>" +
            '<div class="button_group" onclick="(event) => event.stopPropogation();" style="display: flex;">' +
            '<button class="shop-now text-link quick-add-btn js-quick-add-btn ' +
            product.available +
            '" onclick="addProductToMiniCart(event,' +
            product.variants[0].id +
            ', this)" data-id="' +
            product.variants[0].id +
            '">ADD TO CART</button></div></div></div></div>';
        }

        $("#recom1").append(product_html);
      },
      error: function (error) {
        console.log("Error: " + error);
      },
    });
  });
}

function getHaircareProductForSectionTwo() {
  var selectedParameter1 = quizParameters.hairMainGoal[0] + "2";
  let mergedArr = [];
  if (typeof quizParameters.hairMainGoal[1] != "undefined") {
    var selectedParameter2 = quizParameters.hairMainGoal[1] + "2";
    let arr = [...window[selectedParameter1], ...window[selectedParameter2]];
    mergedArr = [...new Set(arr)];
  } else {
    mergedArr = window[selectedParameter1];
  }

  $(mergedArr).each(function (index, data) {
    jQuery.ajax({
      type: "GET",
      url: "/products/" + data + ".json",
      success: function (response) {
        var product = response.product;

        productHandleForMoengage.push(product.handle);
        productIdForMoengage.push(product.id);
        productTitleForMoengage.push(product.title);

        var product_html = "";
        if (product.variants[0].compare_at_price == product.variants[0].price) {
          product_html =
            '<div class="grid-item grid-product" data-product-handle="' +
            product.handle +
            '" data-product-id="' +
            product.id +
            '"><div class="grid-item__content"><div class="grid-product__image-wrap" onclick="myFunction(/products/' +
            product.handle +
            ')"><div style="height: 0; padding-bottom:100%;"><img class="grid__image-contain" src="' +
            product.image.src +
            '" /></div><div class="grid-product__title text-center" onclick="myFunction(/products/' +
            product.handle +
            ')"><a href="/products/' +
            product.handle +
            '" class="grid-item__link">' +
            product.title +
            '</a></div></div><div class="grid-item__meta-secondary"><div class="grid-product__price">' +
            '<span class="grid-product__price--current"><span aria-hidden="true" class="grid-product__price--from">' +
            product.variants[0].price +
            '</span><span class="visually-hidden">' +
            product.variants[0].price +
            "</span></span>" +
            '</div><div class="button_group" onclick="(event) => event.stopPropogation();" style="display: flex;">' +
            '<button class="shop-now text-link quick-add-btn js-quick-add-btn ' +
            product.available +
            '" onclick="addProductToMiniCart(event,' +
            product.variants[0].id +
            ', this)" data-id="' +
            product.variants[0].id +
            '">ADD TO CART</button></div></div></div></div>';
        } else {
          product_html =
            '<div class="grid-item grid-product" data-product-handle="' +
            product.handle +
            '" data-product-id="' +
            product.id +
            '"><div class="grid-item__content"><div class="grid-product__image-wrap" onclick="myFunction(/products/' +
            product.handle +
            ')"><div style="height: 0; padding-bottom:100%;"><img class="grid__image-contain" src="' +
            product.image.src +
            '" /></div><div class="grid-product__title text-center" onclick="myFunction(/products/' +
            product.handle +
            ')"><a href="/products/' +
            product.handle +
            '" class="grid-item__link">' +
            product.title +
            '</a></div></div><div class="grid-item__meta-secondary">' +
            '<div class="grid-product__price"><span class="visually-hidden">Regular price</span><span class="grid-product__price--original">' +
            '<span aria-hidden="true">₹' +
            product.variants[0].compare_at_price +
            "</span>" +
            '<span class="visually-hidden">₹ ' +
            product.variants[0].compare_at_price +
            "</span></span> " +
            '<span class="grid-product__price--current"><span aria-hidden="true">₹' +
            product.variants[0].price +
            '</span><span class="visually-hidden">₹' +
            product.variants[0].price +
            "</span></span>" +
            '<strong>|<span class="percentage_off">' +
            (
              ((product.variants[0].compare_at_price -
                product.variants[0].price) /
                product.variants[0].compare_at_price) *
              100
            ).toFixed() +
            "% OFF</span></strong></div>" +
            '<div class="button_group" onclick="(event) => event.stopPropogation();" style="display: flex;">' +
            '<button class="shop-now text-link quick-add-btn js-quick-add-btn ' +
            product.available +
            '" onclick="addProductToMiniCart(event,' +
            product.variants[0].id +
            ', this)" data-id="' +
            product.variants[0].id +
            '">ADD TO CART</button></div></div></div></div>';
        }

        titleTwo.show();
        //console.log("data");
        //console.log(product_html);
        //console.log($("#recom1"));
        //$("#recom1").children().append(product_html); //TODO yaha pe recom2 tha
        $("#recom1").append(product_html);
        slickSetupForMobile();
      },
      error: function (error) {
        console.log("Error: " + error);
      },
    });
  });
}

function getSkincareProductForSectionOne(sameName) {
  //debugger;
  var selectedParameter1 = quizParameters.facePrimary[0] + "1";
  var selectedParameter2 = quizParameters.bodyPrimary[0] + "1";

  var concernTitle1 = $(`input#${quizParameters.facePrimary[0]}`).siblings()[1];
  if ($(concernTitle1).text().trim() == sameName) {
    $("#concernTitle1").text("Face - " + $(concernTitle1).text().trim());
  } else {
    $("#concernTitle1").text($(concernTitle1).text().trim());
  }

  var concernTitle2 = $(`input#${quizParameters.bodyPrimary[0]}`).siblings()[1];
  if ($(concernTitle2).text().trim() == sameName) {
    $("#concernTitle2").text("Body - " + $(concernTitle2).text().trim());
  } else {
    $("#concernTitle2").text($(concernTitle2).text().trim());
  }
  let arr = [...window[selectedParameter1], ...window[selectedParameter2]];
  let mergedArr = [...new Set(arr)];

  var selectedParameter1Text = quizParameters.facePrimary[0] + "Text";
  $("#concernText1").html(window[selectedParameter1Text]);
  $("#expert1").html(window[selectedParameter1Text]);
  var selectedParameter2Text = quizParameters.bodyPrimary[0] + "Text";
  $("#concernText2").html(window[selectedParameter2Text]);
  //$("#expert2").html(window[selectedParameter2Text]);

  if (typeof quizParameters.facePrimary[1] != "undefined") {
    var concernTitle3 = $(
      `input#${quizParameters.facePrimary[1]}`
    ).siblings()[1];
    $("#concernTitle3").text($(concernTitle3).text().trim());
    var selectedParameter3 = quizParameters.facePrimary[1] + "1";
    mergedArr = [...mergedArr, ...window[selectedParameter3]];
    var selectedParameter3Text = quizParameters.facePrimary[1] + "Text";
    $("#concernText3").html(window[selectedParameter3Text]);
    $("#accordian3").show();
  }

  if (typeof quizParameters.bodyPrimary[1] != "undefined") {
    var concernTitle4 = $(
      `input#${quizParameters.bodyPrimary[1]}`
    ).siblings()[1];
    $("#concernTitle4").text($(concernTitle4).text().trim());
    var selectedParameter4 = quizParameters.bodyPrimary[1] + "1";
    mergedArr = [...mergedArr, ...window[selectedParameter4]];
    var selectedParameter4Text = quizParameters.bodyPrimary[1] + "Text";
    $("#concernText4").html(window[selectedParameter4Text]);
    $("#accordian4").show();
  }
  //console.log(mergedArr);
  $(mergedArr).each(function (index, data) {
    jQuery.ajax({
      type: "GET",
      url: "/products/" + data + ".json",
      success: function (response) {
        var product = response.product;

        productHandleForMoengage.push(product.handle);
        productIdForMoengage.push(product.id);
        productTitleForMoengage.push(product.title);
        
        var product_html = "";
        if (product.variants[0].compare_at_price == product.variants[0].price) {
          product_html =
            '<div class="grid-item grid-product" data-product-handle="' +
            product.handle +
            '" data-product-id="' +
            product.id +
            '"><div class="grid-item__content"><div class="grid-product__image-wrap" onclick="myFunction(/products/' +
            product.handle +
            ')"><div style="height: 0; padding-bottom:100%;"><img class="grid__image-contain" src="' +
            product.image.src +
            '" /></div><div class="grid-product__title text-center" onclick="myFunction(/products/' +
            product.handle +
            ')"><a href="/products/' +
            product.handle +
            '" class="grid-item__link">' +
            product.title +
            '</a></div></div><div class="grid-item__meta-secondary"><div class="grid-product__price">' +
            '<span class="grid-product__price--current"><span aria-hidden="true" class="grid-product__price--from">' +
            product.variants[0].price +
            '</span><span class="visually-hidden">' +
            product.variants[0].price +
            "</span></span>" +
            '</div><div class="button_group" onclick="(event) => event.stopPropogation();" style="display: flex;">' +
            '<button class="shop-now text-link quick-add-btn js-quick-add-btn ' +
            product.available +
            '" onclick="addProductToMiniCart(event,' +
            product.variants[0].id +
            ', this)" data-id="' +
            product.variants[0].id +
            '">ADD TO CART</button></div></div></div></div>';
        } else {
          product_html =
            '<div class="grid-item grid-product" data-product-handle="' +
            product.handle +
            '" data-product-id="' +
            product.id +
            '"><div class="grid-item__content"><div class="grid-product__image-wrap" onclick="myFunction(/products/' +
            product.handle +
            ')"><div style="height: 0; padding-bottom:100%;"><img class="grid__image-contain" src="' +
            product.image.src +
            '" /></div><div class="grid-product__title text-center" onclick="myFunction(/products/' +
            product.handle +
            ')"><a href="/products/' +
            product.handle +
            '" class="grid-item__link">' +
            product.title +
            '</a></div></div><div class="grid-item__meta-secondary">' +
            '<div class="grid-product__price"><span class="visually-hidden">Regular price</span><span class="grid-product__price--original">' +
            '<span aria-hidden="true">₹' +
            product.variants[0].compare_at_price +
            "</span>" +
            '<span class="visually-hidden">₹ ' +
            product.variants[0].compare_at_price +
            "</span></span> " +
            '<span class="grid-product__price--current"><span aria-hidden="true">₹' +
            product.variants[0].price +
            '</span><span class="visually-hidden">₹' +
            product.variants[0].price +
            "</span></span>" +
            '<strong>|<span class="percentage_off">' +
            (
              ((product.variants[0].compare_at_price -
                product.variants[0].price) /
                product.variants[0].compare_at_price) *
              100
            ).toFixed() +
            "% OFF</span></strong></div>" +
            '<div class="button_group" onclick="(event) => event.stopPropogation();" style="display: flex;">' +
            '<button class="shop-now text-link quick-add-btn js-quick-add-btn ' +
            product.available +
            '" onclick="addProductToMiniCart(event,' +
            product.variants[0].id +
            ', this)" data-id="' +
            product.variants[0].id +
            '">ADD TO CART</button></div></div></div></div>';
        }

        $("#recom1").append(product_html);
      },
      error: function (error) {
        console.log("Error: " + error);
      },
    });
  });
}

function getSkincareProductForSectionTwo() {
  ///debugger;
  var selectedParameter1 = null;
  var selectedParameter2 = null;
  var selectedParameter3 = null;
  var selectedParameter4 = null;
  
  if (typeof quizParameters.facePrimary[0] != "undefined") {
    selectedParameter1 = quizParameters.facePrimary[0] + "2";
  }

  if (typeof quizParameters.bodyPrimary[0] != "undefined") {
    selectedParameter2 = quizParameters.bodyPrimary[0] + "2";
  }

  if (typeof quizParameters.facePrimary[1] != "undefined") {
    selectedParameter3 = quizParameters.facePrimary[1] + "2";
  }

  if (typeof quizParameters.bodyPrimary[1] != "undefined") {
    selectedParameter4 = quizParameters.bodyPrimary[1] + "2";
  }
  
  var mergedArr = [];
  if (selectedParameter1 != null && selectedParameter2 != null) {
    let arr = [...window[selectedParameter1], ...window[selectedParameter2]];
    mergedArr = [...new Set(arr)];
  } else if (selectedParameter1 == null) {
    mergedArr = [...new Set(window[selectedParameter2])];
  } else {
    mergedArr = [...new Set(window[selectedParameter1])];
  }

  if(selectedParameter3 != null){
      mergedArr =  [...mergedArr, ...window[selectedParameter3]]
  }

  if(selectedParameter4 != null){
      mergedArr =  [...mergedArr, ...window[selectedParameter4]]
  }

  
  //console.log(mergedArr);

  $(mergedArr).each(function (index, data) {
    jQuery.ajax({
      type: "GET",
      url: "/products/" + data + ".json",
      success: function (response) {
        var product = response.product;
        productHandleForMoengage.push(product.handle);
        productIdForMoengage.push(product.id);
        productTitleForMoengage.push(product.title);
        
        var product_html = "";
        if (product.variants[0].compare_at_price == product.variants[0].price) {
          product_html =
            '<div class="grid-item grid-product" data-product-handle="' +
            product.handle +
            '" data-product-id="' +
            product.id +
            '"><div class="grid-item__content"><div class="grid-product__image-wrap" onclick="myFunction(/products/' +
            product.handle +
            ')"><div style="height: 0; padding-bottom:100%;"><img class="grid__image-contain" src="' +
            product.image.src +
            '" /></div><div class="grid-product__title text-center" onclick="myFunction(/products/' +
            product.handle +
            ')"><a href="/products/' +
            product.handle +
            '" class="grid-item__link">' +
            product.title +
            '</a></div></div><div class="grid-item__meta-secondary"><div class="grid-product__price">' +
            '<span class="grid-product__price--current"><span aria-hidden="true" class="grid-product__price--from">' +
            product.variants[0].price +
            '</span><span class="visually-hidden">' +
            product.variants[0].price +
            "</span></span>" +
            '</div><div class="button_group" onclick="(event) => event.stopPropogation();" style="display: flex;">' +
            '<button class="shop-now text-link quick-add-btn js-quick-add-btn ' +
            product.available +
            '" onclick="addProductToMiniCart(event,' +
            product.variants[0].id +
            ', this)" data-id="' +
            product.variants[0].id +
            '">ADD TO CART</button></div></div></div></div>';
        } else {
          product_html =
            '<div class="grid-item grid-product" data-product-handle="' +
            product.handle +
            '" data-product-id="' +
            product.id +
            '"><div class="grid-item__content"><div class="grid-product__image-wrap" onclick="myFunction(/products/' +
            product.handle +
            ')"><div style="height: 0; padding-bottom:100%;"><img class="grid__image-contain" src="' +
            product.image.src +
            '" /></div><div class="grid-product__title text-center" onclick="myFunction(/products/' +
            product.handle +
            ')"><a href="/products/' +
            product.handle +
            '" class="grid-item__link">' +
            product.title +
            '</a></div></div><div class="grid-item__meta-secondary">' +
            '<div class="grid-product__price"><span class="visually-hidden">Regular price</span><span class="grid-product__price--original">' +
            '<span aria-hidden="true">₹' +
            product.variants[0].compare_at_price +
            "</span>" +
            '<span class="visually-hidden">₹ ' +
            product.variants[0].compare_at_price +
            "</span></span> " +
            '<span class="grid-product__price--current"><span aria-hidden="true">₹' +
            product.variants[0].price +
            '</span><span class="visually-hidden">₹' +
            product.variants[0].price +
            "</span></span>" +
            '<strong>|<span class="percentage_off">' +
            (
              ((product.variants[0].compare_at_price -
                product.variants[0].price) /
                product.variants[0].compare_at_price) *
              100
            ).toFixed() +
            "% OFF</span></strong></div>" +
            '<div class="button_group" onclick="(event) => event.stopPropogation();" style="display: flex;">' +
            '<button class="shop-now text-link quick-add-btn js-quick-add-btn ' +
            product.available +
            '" onclick="addProductToMiniCart(event,' +
            product.variants[0].id +
            ', this)" data-id="' +
            product.variants[0].id +
            '">ADD TO CART</button></div></div></div></div>';
        }

        titleTwo.show();
        $("#recom1").append(product_html); //TODO yaha pe recom2 tha
        slickSetupForMobile();
      },
      error: function (error) {
        console.log("Error: " + error);
      },
    });
  });
}

$('input[name="gender"]').click(function (e) {
  var gender = $('input[name="gender"]:checked').val();
  $(this).parent().siblings().removeClass("active");
  $(this).parent().addClass("active");
  quizParameters.gender = gender;
});

$('input[name="quizType"]').click(function (e) {
  var quizType = $('input[name="quizType"]:checked').val();
  $(this).parent().siblings().removeClass("active");
  $(this).parent().addClass("active");
  quizParameters.quizType = quizType;
});

$('input[name="texture"]').click(function (e) {
  var texture = $('input[name="texture"]:checked').val();
  $(this).parent().siblings().removeClass("active");
  $(this).parent().addClass("active");
  quizParameters.texture = texture;
});

$('input[name="hairType"]').click(function (e) {
  var hairType = $('input[name="hairType"]:checked').val();
  $(this).parent().siblings().removeClass("active");
  $(this).parent().addClass("active");
  quizParameters.hairType = hairType;
});

$('input[name="treatment"]').click(function () {
  if ($(this).is(":checked")) {
    treatmentArray.push($(this).attr("value"));
  } else {
    $(this).prev().hide();
    $(this).prev().html("");
    for (var i = 0; i < treatmentArray.length; i++) {
      if (treatmentArray[i] == $(this).attr("value")) {
        treatmentArray.splice(i, 1);
      }
    }
  }
  quizParameters.treatment = treatmentArray;

  $(".treatment-btn").each(function (inputName) {
    var btnValue = $(this).attr("data-value");
    var btnElement = $(this);
    treatmentArray.forEach(function (value, index) {
      if (btnValue == value) {
        $(btnElement).html(index + 1);
        $(btnElement).show();
      }
    });
  });
});

$('input[name="scalpType"]').click(function (e) {
  var scalpType = $('input[name="scalpType"]:checked').val();
  $(this).parent().siblings().removeClass("active");
  $(this).parent().addClass("active");
  quizParameters.scalpType = scalpType;
});

$('input[name="hairMainGoal"]').click(function () {
  if ($(this).is(":checked")) {
    hairMainGoalArray.push($(this).attr("value"));
    if ($('input[name="hairMainGoal"]:checked').length > 2) {
      var firstElement = hairMainGoalArray[0];
      $(`input#${firstElement}`).prop("checked", false);
      var button = $(`input#${firstElement}`).siblings()[0];
      $(button).text("");
      $(button).hide();
      hairMainGoalArray.shift();
    }
  } else {
    $(this).prev().hide();
    $(this).prev().html("");
    for (var i = 0; i < hairMainGoalArray.length; i++) {
      if (hairMainGoalArray[i] == $(this).attr("value")) {
        hairMainGoalArray.splice(i, 1);
      }
    }
  }
  quizParameters.hairMainGoal = hairMainGoalArray;

  $(".hairMainGoal-btn").each(function (inputName) {
    var btnValue = $(this).attr("data-value");
    var btnElement = $(this);
    hairMainGoalArray.forEach(function (value, index) {
      if (btnValue == value) {
        $(btnElement).html(index + 1);
        $(btnElement).show();
      }
      //else{
      //   $(btnElement).html("");
      //   $(btnElement).hide();
      //}
    });
  });
});

$('input[name="skinType"]').click(function (e) {
  var skinType = $('input[name="skinType"]:checked').val();
  $(this).parent().siblings().removeClass("active");
  $(this).parent().addClass("active");
  quizParameters.skinType = skinType;
});

$('input[name="skinFeel"]').click(function () {
  if ($(this).is(":checked")) {
    skinFeelArray.push($(this).attr("value"));
  } else {
    $(this).prev().hide();
    $(this).prev().html("");
    for (var i = 0; i < skinFeelArray.length; i++) {
      if (skinFeelArray[i] == $(this).attr("value")) {
        skinFeelArray.splice(i, 1);
      }
    }
  }
  quizParameters.skinFeel = skinFeelArray;

  $(".skinFeel-btn").each(function (inputName) {
    var btnValue = $(this).attr("data-value");
    var btnElement = $(this);
    skinFeelArray.forEach(function (value, index) {
      if (btnValue == value) {
        $(btnElement).html(index + 1);
        $(btnElement).show();
      }
    });
  });
});

$('input[name="skinCondition"]').click(function () {
  var selectedValue = $(this).attr("value");

  if ($(this).is(":checked")) {
    if (selectedValue == "None") {
      $('input[name="skinCondition"]').prop("checked", false);
      $(this).prop("checked", true);
      skinConditionArray = [];
    } else {
      $("#None").prop("checked", false);
      skinConditionArray = skinConditionArray.filter(function (item) {
        return item !== "None";
      });
    }
    skinConditionArray.push($(this).attr("value"));
  } else {
    $(this).prev().hide();
    $(this).prev().html("");
    for (var i = 0; i < skinConditionArray.length; i++) {
      if (skinConditionArray[i] == $(this).attr("value")) {
        skinConditionArray.splice(i, 1);
      }
    }
  }
  quizParameters.skinCondition = skinConditionArray;

  $(".skinCondition-btn").each(function (inputName) {
    var btnValue = $(this).attr("data-value");
    var btnElement = $(this);
    skinConditionArray.forEach(function (value, index) {
      if (btnValue == value) {
        $(btnElement).html(index + 1);
        $(btnElement).show();
      }
      if (value == "None") {
        $(btnElement).hide();
      }
    });
  });
});

$('input[name="facePrimary"]').click(function (e) {
  var selectedValue = $(this).attr("value");

  if ($(this).is(":checked")) {
    if (selectedValue == "None") {
      $('input[name="facePrimary"]').prop("checked", false);
      $(this).prop("checked", true);
      facePrimaryArray = [];
    } else {
      $("#None").prop("checked", false);
      facePrimaryArray = facePrimaryArray.filter(function (item) {
        return item !== "None";
      });

      if ($('input[name="facePrimary"]:checked').length > 2) {
        var firstElement = facePrimaryArray[0];
        $(`input#${firstElement}`).prop("checked", false);
        var button = $(`input#${firstElement}`).siblings()[0];
        $(button).text("");
        $(button).hide();
        facePrimaryArray.shift();
      }
    }
    facePrimaryArray.push($(this).attr("value"));
  } else {
    $(this).prev().hide();
    $(this).prev().html("");
    for (var i = 0; i < facePrimaryArray.length; i++) {
      if (facePrimaryArray[i] == $(this).attr("value")) {
        facePrimaryArray.splice(i, 1);
      }
    }
  }
  quizParameters.facePrimary = facePrimaryArray;

  $(".facePrimary-btn").each(function (inputName) {
    var btnValue = $(this).attr("data-value");
    var btnElement = $(this);
    facePrimaryArray.forEach(function (value, index) {
      if (btnValue == value) {
        $(btnElement).html(index + 1);
        $(btnElement).show();
      }
      if (value == "None") {
        $(btnElement).hide();
      }
    });
  });
});

$('input[name="bodyPrimary"]').click(function (e) {
  var selectedValue = $(this).attr("value");

  if ($(this).is(":checked")) {
    if (selectedValue == "None") {
      $('input[name="bodyPrimary"]').prop("checked", false);
      $(this).prop("checked", true);
      bodyPrimaryArray = [];
    } else {
      $("#None").prop("checked", false);
      bodyPrimaryArray = bodyPrimaryArray.filter(function (item) {
        return item !== "None";
      });

      if ($('input[name="bodyPrimary"]:checked').length > 2) {
        var firstElement = bodyPrimaryArray[0];
        $(`input#${firstElement}`).prop("checked", false);
        var button = $(`input#${firstElement}`).siblings()[0];
        $(button).text("");
        $(button).hide();
        bodyPrimaryArray.shift();
      }
    }
    bodyPrimaryArray.push($(this).attr("value"));
  } else {
    $(this).prev().hide();
    $(this).prev().html("");
    for (var i = 0; i < bodyPrimaryArray.length; i++) {
      if (bodyPrimaryArray[i] == $(this).attr("value")) {
        bodyPrimaryArray.splice(i, 1);
      }
    }
  }
  quizParameters.bodyPrimary = bodyPrimaryArray;

  $(".bodyPrimary-btn").each(function (inputName) {
    var btnValue = $(this).attr("data-value");
    var btnElement = $(this);
    bodyPrimaryArray.forEach(function (value, index) {
      if (btnValue == value) {
        $(btnElement).html(index + 1);
        $(btnElement).show();
      }
      if (value == "None") {
        $(btnElement).hide();
      }
    });
  });
});

$(".quiz-container input").change(function () {
  if ($(this).is(":checked")) {
    //console.log("Checkbox is checked..");
    //console.log($(this));
    var totalRequired = $(this).parent().parent().parent().data("selection");
    var nameInput = $(this).attr("name");
    var currentSelected = $(`input[name="${nameInput}"]:checked`).length;

    if (totalRequired == currentSelected) {
      setTimeout(function (e) {
        $(nextBtn).click();
      }, 1000);
    }
  } else {
    //console.log("Checkbox is not checked..");
  }
});

$(".at-title").click(function () {
  $(this)
    .toggleClass("active")
    .next(".at-tab")
    .slideToggle()
    .parent()
    .siblings()
    .find(".at-tab")
    .slideUp()
    .prev()
    .removeClass("active");
});

function slickSetupForMobile() {
  setTimeout(function () {
    if ($(window).width() <= 767) {
      $(".collection-grid").slick({
        rows: 2,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
      });
    }
  }, 2500);
}
