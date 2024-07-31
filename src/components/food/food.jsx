import { Link } from "react-router-dom";
const Food = () => {
    return (
      <section id="food">
        <h2 className="section-title">Food</h2>
        <h4>"Sooo... What's the food situation like in HK? Where do we get food? What types of products are available? What food is HK known for? Will it be difficult to have dietary restrictions? Do they eat anything besides rice and pork dumplings?!??" Easy there, folks. The food situation in HK is awesome. Here's an overview!</h4>
        <h3>Groceries</h3>
        <h4>We definitely have the space in our kitchenettes to store plenty of groceries and cook a fair amount. (See Thanksgiving!) Note that the apartments come with stovetop burners and a microwave, but if you want to have a toaster or oven for baking/roasting, you'll have to invest in a small toaster/toaster oven. At the end of the contract, these items are easy to give away/dozo to other expat performers.</h4>
        <p>
          Park 'n' Shop - literally in the same building as our hotel. Large and
          generally wide selection of foods. A good number of Western-style options.
        </p>
        <p>
          City Super - a large, nicer grocery store with more Western options in
          IFC Mall in Central
        </p>
        <p>
          Elements 360 - also a larger, more Western-focused grocery located in
          the Elements Mall off the Kowloon MTR stop
        </p>
        <p>
          Nature's Village - in Central (and possibly also at the YOHO Mall in
          nearby Yuen Long), this is a more health-conscious store with organic,
          vegetarian, and vegan options you would have trouble finding
          elsewhere. Great for healthy snacks, eco-friendly soaps, protein
          powder, essential oils, and more
        </p>
        <h3>7-11</h3>
        <p>
          That's right. 7-11 is a totally legit option in HK (and many other
          parts of Asia). Great for quick bites or small meals. Can also sell
          beer, wine, and some booze. (They also sell SIM cards, travel
          adapters, over-the-counter remedies, umbrellas, and more!)
        </p>
        <h3>Disney's backstage 7-11</h3>
        <p>
          Your new best friend. The cashier never judges you, even though
          they've already seen you five times that day. Solid, cheap, quick
          meals and snacks. Plus we get a 15% Disney employee discount on every
          purchase!
        </p>
        <h3>Disney employee canteen/cafeteria</h3>
        <p>
          Very cheap. Sometimes good, sometimes meh, sometimes great. Fish
          breakfast is a hallowed caroler rite of passage. You will grow to love
          it. The canteens can be dicey when it comes to satisfying
          vegetarian/vegan options. But you can always get the French Fries at
          tea time (between 2pm and 6pm).
        </p>
        <p>
          Which reminds me: Our schedule often doesn't give us a meal break
          until after 2pm, meaning we don't necessarily have access to a full lunch menu
          but only the more limited tea time menu. Especially for
          vegetarian/vegan eaters, it often seems more reliable to bring your
          own meals. Microwaves are plentiful, so you can always heat something
          up.
        </p>
        <img
          id="fish-breakfast"
          src="assets/Fish Breakfast.jpg"
          alt="fish breakfast"
        />
        <p class="img-caption">
          Western Fried Fish and Scrambled Eggs breakfast.
        </p>
        <h3>Restaurants</h3>
        <p>
          See restaurant list on the <Link to="/leisure">Leisure</Link> page
        </p>
        <h3>Street Food</h3>
        <p>
          No trip to HK is complete without getting dim sum. Arguably the best
          place on the planet for dim sum, HK sports an endless roster of dim
          sum restaurants and quick-food outlets. A couple of our favorites are
          Dim Dim Sum and Tim Ho Wan.
        </p>
        <img
          class="list-pic"
          src="assets/Dim Sum.jpg"
          alt="dim sum"
        />
        <p class="img-caption">Dim sum spread at Dim Dim Sum.</p>
        <p>
          Another classic HK experience is eating some sort of mystery food
          item, usually from a street vendor. Curry fish balls, bubble waffles
          (i.e. egg puffs), random bao, octopus, pork jerky...You've got to try
          something!
        </p>
        <img
          class="list-pic"
          src="assets/Chinese Menu Weird Items.jpg"
          alt="food menu with strange items"
        />
        <p class="img-caption">
          Authentic Cantonese restaurants advertise some ... odd items.
        </p>
        <p>
          Bubble/Boba Tea is a big business in HK, having been popularized in
          nearby Taiwan. You'll find boba tea everywhere. I recommend Tiger
          Sugar or ShareTea.
        </p>
        <h3 id="hk-food-video">Good overview of iconic Hong Kong food!</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NL2QzyDvvT8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    );
}

export default Food