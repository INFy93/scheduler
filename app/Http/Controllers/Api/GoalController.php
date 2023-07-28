<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\GoalRequest;
use App\Http\Resources\GoalsResource;
use App\Models\Goal;
use Illuminate\Http\Request;

class GoalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $goals = Goal::with('perf_user', 'author')
        ->orderBy('id', 'desc')
        ->get();

        return GoalsResource::collection($goals);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(GoalRequest $request): GoalsResource
    {
       $goal = Goal::create($request->validated());

       return new GoalsResource($goal);
    }

    /**
     * Display the specified resource.
     */
    public function show(Goal $goal): GoalsResource
    {
        return new GoalsResource($goal);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(GoalRequest $request, Goal $goal): GoalsResource
    {
        $goal->update($request->validated());

        return new GoalsResource($goal);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Goal $goal): \Illuminate\Http\Response
    {
        $goal->delete();

        return response()->noContent();
    }
}
