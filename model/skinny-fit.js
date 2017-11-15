//skinnyfit model
var skinnyFit = (function () {
  var _data = {
    "skinny-fit-one-sub": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/03/26111604/sf_detox_one_bag.jpg" alt="slimfit-img" />',
      product_description: 'A one-bag supply of SkinnyFit Detox Energizing Tea Blend is perfect for the first-time SkinnyFit user or if you’re only buying for yourself. This 28-day supply helps you jumpstart a healthier lifestyle. Of course, you’ll want to pair your all-natural detox routine with clean eating and light exercise for best results. Each bag of SkinnyFit Detox has 28 servings.',
      product_price: '$59.95',
      product_title: 'Detox 1 Bag',
      product_sub_title: '1 Bag / Month at 59.95 Per Month'
    },
    "skinny-fit-one": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/03/26111604/sf_detox_one_bag.jpg" alt="slimfit-img" />',
      product_description: 'A one-bag supply of SkinnyFit Detox Energizing Tea Blend is perfect for the first-time SkinnyFit user or if you’re only buying for yourself. This 28-day supply helps you jumpstart a healthier lifestyle. Of course, you’ll want to pair your all-natural detox routine with clean eating and light exercise for best results. Each bag of SkinnyFit Detox has 28 servings.',
      product_price: '$59.95',
      product_title: 'Detox 1 Bag',
      product_sub_title: 'One Time Purchase'
    },
    "skinny-fit-two-sub": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/09/26112329/sf_detox_two_bags.jpg" alt="slimfit-img" />',
      product_description: 'Want to do an all-natural detox with a friend? The two-bag supply of SkinnyFit Detox works best for sharing or if you want to take the Detox twice a day to beat that afternoon slump! Best of all, you get it at a reduced price! Don’t forget to pair your detox routine with a healthy meal plan and regular physical activity. Each bag of SkinnyFit Detox has 28 servings.',
      product_price: '$89.95',
      product_title: '2 Detox Bags',
      product_sub_title: '2 Bags / Month at 89.95 Per Month'
    },
    "skinny-fit-two": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/09/26112329/sf_detox_two_bags.jpg" alt="slimfit-img" />',
      product_description: 'Want to do an all-natural detox with a friend? The two-bag supply of SkinnyFit Detox works best for sharing or if you want to take the Detox twice a day to beat that afternoon slump! Best of all, you get it at a reduced price! Don’t forget to pair your detox routine with a healthy meal plan and regular physical activity. Each bag of SkinnyFit Detox has 28 servings.',
      product_price: '$89.95',
      product_title: '2 Detox Bags',
      product_sub_title: 'One Time Purchase'
    },
    "skinny-fit-three-sub": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/09/26112255/sf_detox_three_bags.jpg" alt="slimfit-img" />',
      product_description: 'The ultimate bang for your buck. This 3-bag set of SkinnyFit Detox Energizing Tea Blend is great to share with bigger groups– your squad, your office, your family! It’s also a great bundle to purchase to give out as gifts. The more, the merrier! For the best results, pair your detox with a healthy diet and your favorite exercise routine. Each bag of SkinnyFit Detox has 28 servings.',
      product_price: '$123.95',
      product_title: '3 Detox Bags',
      product_sub_title: '3 Bags / Month at 123.95 Per Month'
    },
    "skinny-fit-three": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/09/26112255/sf_detox_three_bags.jpg" alt="slimfit-img" />',
      product_description: 'The ultimate bang for your buck. This 3-bag set of SkinnyFit Detox Energizing Tea Blend is great to share with bigger groups– your squad, your office, your family! It’s also a great bundle to purchase to give out as gifts. The more, the merrier! For the best results, pair your detox with a healthy diet and your favorite exercise routine. Each bag of SkinnyFit Detox has 28 servings.',
      product_price: '$123.95',
      product_title: '3 Detox Bags',
      product_sub_title: 'One Time Purchase'
    },
    "skinnyfit-detox-sgk-bottle": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/03/23092535/sf_deto_sgk_tea_bottle.jpg" alt="slimfit-img" />',
      product_description: 'SkinnyFit limited edition bundle benefits Susan G. Komen San Diego. $4 from every purchase of this limited edition bundle will be donated to Susan G. Komen San Diego. Join us in raising awareness, supporting women with breast cancer, and supporting breast cancer research!',
      product_price: '$84.90',
      product_title: 'Detox 1 Bag & Pink Power Detox Bottle',
      product_sub_title: 'One Time Purchase'
    },
    "skinny-fit-one-sub-bundle": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/09/26114502/sf_detox_hb1.jpg" alt="slimfit-img" />',
      product_description: 'This SkinnyFit Detox and Hunger Buster bundle helps you get your best results. Taking them together gives you cleansing benefits and boosts fat burn while curbing your cravings. Pair it with a healthy diet and an exercise routine and you’ll start feeling the results in no time. Each bag of SkinnyFit Detox has 28 servings. Each bottle of Hunger Buster has 60 capsules.',
      product_price: '$87.90',
      product_title: 'Detox 1 Bag + 1 Bottle Hunger Buster',
      product_sub_title: '1 Bag + 1 Bottle / Month at 87.90 Per Month'
    },
    "skinny-fit-one-bundle": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/09/26114502/sf_detox_hb1.jpg" alt="slimfit-img" />',
      product_description: 'This SkinnyFit Detox and Hunger Buster bundle helps you get your best results. Taking them together gives you cleansing benefits and boosts fat burn while curbing your cravings. Pair it with a healthy diet and an exercise routine and you’ll start feeling the results in no time. Each bag of SkinnyFit Detox has 28 servings. Each bottle of Hunger Buster has 60 capsules.',
      product_price: '$87.90',
      product_title: 'Detox 1 Bag + 1 Bottle Hunger Buster',
      product_sub_title: 'One Time Purchase'
    },
    "skinny-fit-one-hunger-sub": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/09/26114933/sf_hunger_buster.jpg" alt="slimfit-img" />',
      product_description: 'This 1-month supply of SkinnyFit Hunger Buster is perfect for anyone who needs to outsmart cravings. It gives you the extra push to reach your health goals. Show your cravings who’s boss, make healthy choices, and start feeling beautiful. Each bottle of Hunger Buster has 60 capsules.',
      product_price: '$49.95',
      product_title: '1 Bottle Hunger Buster',
      product_sub_title: '1 Bottle / Month at 49.95 Per Month'
    },
    "skinny-fit-one-hunger": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/09/26114933/sf_hunger_buster.jpg" alt="slimfit-img" />',
      product_description: 'This 1-month supply of SkinnyFit Hunger Buster is perfect for anyone who needs to outsmart cravings. It gives you the extra push to reach your health goals. Show your cravings who’s boss, make healthy choices, and start feeling beautiful. Each bottle of Hunger Buster has 60 capsules.',
      product_price: '$49.95',
      product_title: '1 Bottle Hunger Buster',
      product_sub_title: 'One Time Purchase'
    },
    "skinnyfit-sgk-bottle": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/03/23092536/sf_sgk_tea_bottle.jpg" alt="slimfit-img" />',
      product_description: 'SkinnyFit limited edition Detox Bottle benefits Susan G. Komen San Diego. We will donate $4 from every purchase of this 33 oz. pink SkinnyFit bottle. Join us in raising awareness, supporting women with breast cancer, and supporting breast cancer research!',
      product_price: '$24.95',
      product_title: 'Pink Power Detox Bottle',
      product_sub_title: 'One Time Purchase'
    },
    "skinny-fit-one-water": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/03/12105746/skinny_fit_water_bottle_filled_v3.jpg" alt="slimfit-img" />',
      product_description: 'Drink your SkinnyFit Detox in style! This 24-oz water bottle is BPA-free. Perfect for taking your iced Detox to go!',
      product_price: '$19.95',
      product_title: 'SkinnyFit Detox Bottle',
      product_sub_title: 'One Time Purchase'
    },
    "skinny-fit-one-tea-hunger-water-bundle": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/09/26112328/sf_detox_family.jpg" alt="slimfit-img" />',
      product_description: 'Get the whole SkinnyFit family and get closer to your weight loss goals. Detox and Hunger Buster taken together help you supercharge your weight loss while curbing hunger. The SkinnyFit 24-oz BPA-free bottle is perfect for taking your detox while you work out, at work, or on the go. Each bag of SkinnyFit Detox has 28 servings. Each bottle of Hunger Buster has 60 capsules.',
      product_price: '$129.85',
      product_title: 'Detox 1 Bag + Hunger Buster + Detox Bottle',
      product_sub_title: 'One Time Purchase'
    },
    "skinny-fit-one-water-bundle": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/09/26112326/sf_detox_tea_bottle.jpg" alt="slimfit-img" />',
      product_description: 'Kickstart your healthy lifestyle by making it easy to do an all-natural detox with this bundle. Take SkinnyFit Detox anywhere you go with the 24-oz BPA-free water bottle. Each bag of SkinnyFit Detox has 28 servings.',
      product_price: '$79.90',
      product_title: 'Detox 1 Bag + Detox Bottle',
      product_sub_title: 'One Time Purchase'
    },
    "skinny-fit-one-hunger-water-bundle": {
      product_image: '<img src="https://ddoqvtff54hy.cloudfront.net/wp-content/uploads/2017/09/26114933/sf_hb_tea_bottle.jpg" alt="slimfit-img" />',
      product_description: 'Hydrate in style with this 24-oz BPA-free water bottle. Taking Hunger Buster plus taking in plenty of fluids helps you fight cravings and reach your weight loss goals faster. Each bottle of Hunger Buster has 60 capsules.',
      product_price: '$69.90',
      product_title: 'Hunger Buster + Tea Bottle',
      product_sub_title: 'One Time Purchase'
    }
  },
  _api = {
    getDataPointValue: function (dataSetID, key) {
      return _data[dataSetID][key]
    }
  };
  return {
    api: _api
  }
})();