<?php

namespace Database\Factories;

use App\Models\Impact;
use Illuminate\Database\Eloquent\Factories\Factory;

class ImpactFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Impact::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
//            'level' => Impact::all()->random()->level
        ];
    }
}
