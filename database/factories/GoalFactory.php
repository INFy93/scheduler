<?php

namespace Database\Factories;

use App\Models\Goal;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class GoalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Goal::class;


    public function definition(): array
    {

        $name = ['Почистить от снега', 'Заменить аккумулятор', 'Проверить камеры', 'Посмотреть netping'];
        $description = ['Нужно заменить аккумулятор в серверной', 'На антеннах снег - убрать', 'Камера в паутине', 'Не работает сигнализация'];
        $author_id = ['1', '2', '3'];
        $performer_id = ['4', '5', '6'];
        $goal_time = Carbon::now()->addDays(4);

        return [
            'name' => Arr::random($name),
            'description' => Arr::random($description),
            'author_id' => Arr::random($author_id),
            'performer_id' => Arr::random($performer_id),
            'goal_time' => $goal_time,
        ];
    }
}
