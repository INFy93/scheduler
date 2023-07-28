<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GoalRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'description' => ['required'],
            'author_id' => ['required'],
            'performer_id' => ['required'],
            'goal_time' => ['required']
        ];
    }

    public function messages()

    {

        return [

            'name.required' => 'Поле "Заголовок задачи" обязательно для заполнения',
            'description.required' => 'Поле "Описание задачи" обязательно для заполнения',
            'performer_id.required' => 'Не выбран исполнитель!',
            'goal_time.required' => 'Не указано время завершения задачи!',

        ];

    }
}
