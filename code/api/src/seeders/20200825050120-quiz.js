"use strict";

const params = require("../config/params");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", [
      {
        name: "Artsy Bottoms",
        slug: "artsy-bottoms",
        description: "Color block pants for anyone who dares",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/artsy-bottom1.png",
        style: "artsy",
        isSurvey: true,
        category: "bottoms",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Salmon Pin Stripe Bottoms",
        slug: "salmon-pin-stripe-bottoms",
        description: "Just keep walking",
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: "/images/quiz/artsy-bottom2.png",
        style: "artsy",
        isSurvey: true,
        category: "bottoms",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Coolada Shoes",
        slug: "coolada-shoes",
        description: "Who lives in a pineapple under the sea",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/artsy-shoes1.png",
        style: "artsy",
        isSurvey: true,
        category: "shoes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Turquoise Blend",
        slug: "turquois-blend",
        description: "Makes your feet thing they're dancing in water",
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: "/images/quiz/artsy-shoes2.png",
        style: "artsy",
        isSurvey: true,
        category: "shoes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Checkered Shirt",
        slug: "checkered-shirt",
        description: "Royalty of a deck of cards",
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: "/images/quiz/artsy-top1.png",
        style: "artsy",
        isSurvey: true,
        category: "top",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Soup Shirt",
        slug: "soup-shirt",
        description: "Chicken noodle soup",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/artsy-top2.png",
        style: "artsy",
        isSurvey: true,
        category: "top",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bohemian Pants",
        slug: "bohemian-pants",
        description: "Super comfy for those Coachella shows",
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: "/images/quiz/bohemian-bottom1.png",
        style: "bohemian",
        isSurvey: true,
        category: "bottoms",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bohemian Bottoms",
        slug: "bohemian-bottoms",
        description: "Soft like clouds",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/bohemian-bottom2.png",
        style: "bohemian",
        isSurvey: true,
        category: "bottoms",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Colorblock Shoes",
        slug: "colorblock-shoes",
        description: "Let your feet be bold",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/bohemian-shoes1.png",
        style: "bohemian",
        isSurvey: true,
        category: "shoes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bohemian Shoes",
        slug: "bohemian-shoes",
        description: "Don't blend with the crowd",
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: "/images/quiz/bohemian-shoes2.png",
        style: "bohemian",
        isSurvey: true,
        category: "shoes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bohemian Blouse",
        slug: "bohemian-blouse",
        description: "Feel the rain on your skin",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/bohemian-top1.png",
        style: "bohemian",
        isSurvey: true,
        category: "top",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bohemian Shirt",
        slug: "bohemian-shirt",
        description: "You make the moon our mirror ball",
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: "/images/quiz/bohemian-top2.png",
        style: "bohemian",
        isSurvey: true,
        category: "top",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Business Pants",
        slug: "business-pants",
        description: "Classic",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/business-bottoms1.png",
        style: "business",
        isSurvey: true,
        category: "bottoms",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Business Trousers",
        slug: "bohemian-trouers",
        description: "Classic",
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: "/images/quiz/business-bottoms2.png",
        style: "business",
        isSurvey: true,
        category: "bottoms",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Classic Red Shoes",
        slug: "classic-red-shoes",
        description: "A classic pair of black ballet flats",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/business-shoes1.png",
        style: "business",
        isSurvey: true,
        category: "shoes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Business Loafers",
        slug: "bohemian-loafers",
        description: "Classic but modern",
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: "/images/quiz/business-shoes2.png",
        style: "business",
        isSurvey: true,
        category: "shoes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Business Blouse",
        slug: "business-blouse",
        description: "Classic",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/business-top1.png",
        style: "business",
        isSurvey: true,
        category: "top",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sweater Vest",
        slug: "sweater-vest",
        description: "Sweater Weather",
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: "/images/quiz/business-top2.png",
        style: "business",
        isSurvey: true,
        category: "top",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rocker Pants",
        slug: "rocker-pants",
        description: "Feel like you're jamming out in the daytime",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/rocker-bottoms1.png",
        style: "rocker",
        isSurvey: true,
        category: "bottoms",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rocker Trousers",
        slug: "rocker-trouers",
        description: "Not for the sunshine lovers",
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: "/images/quiz/rocker-bottoms2.png",
        style: "rocker",
        isSurvey: true,
        category: "bottoms",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rocker Boots",
        slug: "rocker-boots",
        description: "Rock n Roll",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/rocker-shoes1.png",
        style: "rocker",
        isSurvey: true,
        category: "shoes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rocker Flower Boots",
        slug: "rocker-flower-boots",
        description: "Stomp the roses",
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: "/images/quiz/rocker-shoes2.png",
        style: "rocker",
        isSurvey: true,
        category: "shoes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rocker Top",
        slug: "rocker-top",
        description: "Look what you made me do",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/rocker-top1.png",
        style: "rocker",
        isSurvey: true,
        category: "top",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rocker Combo",
        slug: "rocker-combo",
        description: "I see the shadows on my face",
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: "/images/quiz/rocker-top2.png",
        style: "rocker",
        isSurvey: true,
        category: "top",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Artsy Result",
        slug: "artsy-result",
        description: "Artsy",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/result-artsy.png",
        style: "artsy",
        isSurvey: true,
        category: "result",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bohemian Result",
        slug: "bohemian-result",
        description: "Bohemian",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/result-bohemian.png",
        style: "bohemian",
        isSurvey: true,
        category: "result",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Business Result",
        slug: "business-result",
        description: "Business",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/result-business.png",
        style: "business",
        isSurvey: true,
        category: "result",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rocker Result",
        slug: "rocker-result",
        description: "Rocker",
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: "/images/quiz/result-rocker.png",
        style: "rocker",
        isSurvey: true,
        category: "result",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};