<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'author_id',
        'performer_id',
        'goal_time'
    ];


    public function perf_user()
    {
        return $this->hasOne(User::class, 'id', 'performer_id');
    }

    public function author()
    {
        return $this->hasOne(User::class, 'id', 'author_id');
    }
}
