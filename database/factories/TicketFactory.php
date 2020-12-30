<?php

namespace Database\Factories;

use App\Models\Impact;
use App\Models\Ticket;
use App\Models\TicketStatus;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TicketFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Ticket::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $user = User::factory()->make();
        $user->save();
        return [
            'identifier' => $this->faker->randomNumber(6),
            'title' => $this->faker->realText(24),
            'description' => $this->faker->realText(),
            'impact_id' => Impact::all()->random()->id,
            'created_by_id' => $user->id,
            'status_id' => TicketStatus::all()->random()->id,
            'estimated_labour' => $this->faker->time(),
            'updated_at' => $this->faker->dateTimeThisDecade()
        ];
    }
}
