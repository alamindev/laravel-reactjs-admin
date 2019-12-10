<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use App\Review;
use App\Product;
use Faker\Generator as Faker;

$factory->define(Review::class, function (Faker $faker) {
    return [
        'product_id' => function ($faker)
        {
            return Product::all()->random();
        },
        'user_id' => function ($faker)
        {
            return User::all()->random();
        },
        'comment' => $faker->paragraph,
        'rating' => $faker->numberBetween(0,5),
        
    ];
});
