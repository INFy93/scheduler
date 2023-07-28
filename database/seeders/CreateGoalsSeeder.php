<?php

namespace Database\Seeders;

use App\Models\Goal;
use Database\Factories\GoalFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CreateGoalsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       Goal::factory()->count(12)->create();
    }
}
