# TCPL - Travel Website

Welcome to the TCPL Travel Care Pvt. Ltd. website! This fully responsive travel website is designed to provide users with comprehensive travel information and booking services. The website is built using HTML, CSS, and JavaScript.

## Overview

This website allows users to explore popular travel destinations, view various packages, and learn about the company's vision and mission. The content and configuration of the website are primarily handled through the `siteConfig.js` file, making it easy to customize the website without modifying the HTML or CSS files.

## siteConfig.js

The `siteConfig.js` file is a JavaScript configuration file that holds various settings and content used throughout the website. Below is a detailed explanation of each configurable option within the file and how changes to these options affect the website:

- **Contact Information**
  - `phone1`, `phone2`, and `email`: These fields contain the contact details for the company. Updating these values will automatically update the contact information displayed on the website.

- **Address**
  - `address`: This field holds the company's physical address. Changing this value updates the address displayed on the website.

- **Timing Settings**
  - `transitionTiming`: This value sets the duration of certain animations on the site. Adjusting this value alters how quickly animations occur.

- **Titles and Texts**
  - `hero_title`, `popular_destinations`, `packages_title`, `gallery_title`, `about_us`, `our_motto`, `our_vision`: These fields define various section titles on the website. Changing these values updates the respective section titles.
  - `popular_destinations_text`, `packages_text`, `gallery_text`, `about_us_text`, `our_motto_text`, `our_vision_text`: These fields contain descriptive text for each section. You can modify these texts to reflect different content or messaging.

- **Content Counts**
  - `popular_destinations_count`, `package_count`: These numbers set how many items are displayed in the popular destinations and packages sections. Alter these values to change the number of items shown.

- **Image and Description Array**
  - The array within the file contains objects with `image`, `title`, `subTitle`, `text`, and `details` properties. Each object corresponds to a popular destination or package. Adding, removing, or editing these objects will dynamically change the content displayed in the respective sections.

## Customizing the Website

To customize the website, simply modify the values in the `siteConfig.js` file according to your needs. For example:

- To update the company's contact number, change the value of `phone1` or `phone2`.
- To display a different hero title, change the `hero_title` field.
- To showcase more travel packages, increase the `package_count` and add more objects to the packages array with the necessary details.

These changes will automatically reflect on the website without the need to alter any HTML or CSS files, making it easy to maintain and update the website content.

## Adding Destinations and Packages

To add new destinations and packages to the website, you can do so by updating the `siteConfig.js` file. This file contains arrays that hold the data for popular destinations and travel packages. Here's how you can add new entries:

### Adding a New Destination

1. **Locate the `popularDestinations` Array:**

   Open the `siteConfig.js` file and find the `popularDestinations` array. This array contains objects, each representing a popular destination.

2. **Create a New Destination Object:**

   Add a new object to the `popularDestinations` array. Each object should have the following properties:
   - `image`: The path to the image that represents the destination.
   - `title`: The name of the destination.
   - `subTitle`: A short subtitle or location.
   - `text`: A brief description of the destination.
   - `details`: Detailed information about the destination.

   ```javascript
   const popularDestinations = [
       // Existing destinations...
       {
           image: "./assets/images/new-destination.jpg",
           title: "New Destination",
           subTitle: "Country",
           text: "Brief description of the destination.",
           details: "Detailed information about the destination."
       }
   ];
   ```

3. **Update the Count:**

   If you want the new destination to appear on the website, ensure that `popular_destinations_count` in the `siteConfig` object is set to a value that includes the new destination.

### Adding a New Package

1. **Locate the `packages` Array:**

   In the `siteConfig.js` file, find the `packages` array. This array contains objects, each representing a travel package.

2. **Create a New Package Object:**

   Add a new object to the `packages` array. Each object should have the following properties:
   - `image`: The path to the image that represents the package.
   - `alt`: A text description for the image.
   - `title`: The name of the package.
   - `text`: A brief description of the package.
   - `duration`: The duration of the package (e.g., "7D/6N").
   - `pax`: The number of people the package is for.
   - `location`: The location of the package.
   - `price`: The regular price of the package.
   - `offer_price`: The discounted price (optional).

   ```javascript
   const packages = [
       // Existing packages...
       {
           image: './assets/images/new-package.jpg',
           alt: 'Description of the new package',
           title: 'New Package Title',
           text: 'Brief description of the package.',
           duration: '5D/4N',
           pax: 2,
           location: 'Destination',
           price: 1000,
           offer_price: 800 // Optional
       }
   ];
   ```

3. **Update the Count:**

   If you want the new package to appear on the website, make sure that `package_count` in the `siteConfig` object is set to a value that includes the new package.

By following these steps, you can easily add new destinations and packages to your website. The changes will automatically be reflected on the website without the need to modify any HTML or CSS files.

### Changing the Gallery and Hero Images

To change the images in the gallery and the hero section, you can do so by updating the `siteConfig.js` file. This file contains arrays that hold the data for the gallery and hero images. Here's how you can change the images:

#### Changing the Gallery Images

1. **Locate the `galleryImages` Array:**

   Open the `siteConfig.js` file and find the `galleryImages` array. This array contains the paths to the images that appear in the gallery section.

2. **Update the Image Paths:**

   To update the images, replace the existing paths with the paths to your new images. For example, if you want to add a new image, you can add a new string to the array with the path to the new image.

#### Changing the Hero Images

1. **Locate the `images` Array:**

   Open the `siteConfig.js` file and find the `images` array. This array contains the paths to the images that appear in the hero section.

2. **Update the Image Paths:**

   To update the images, replace the existing paths with the paths to your new images. For example, if you want to add a new image, you can add a new string to the array with the path to the new image.

## License

This project is **free to use** and does not contain any license.

For further modifications and updates, feel free to fork the repository or contact us for any inquiries or assistance. Enjoy exploring the world with TCPL Travel Care Pvt. Ltd.!
