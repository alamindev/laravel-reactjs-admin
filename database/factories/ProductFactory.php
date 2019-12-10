<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        "name" => $faker->name,
        "description" => $faker->name,
        "price" => $faker->randomNumber(3),
        "discount" => $faker->randomNumber(2),
        "quantity" => $faker->randomNumber(2),
    ];
});
