<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

public function login(Request $request)
{
    // 1. Hakikisha mtumiaji ametuma username na password
$credentials = $request->validate([
    'username' => 'required|string', // <-- Sasa hivi inadai username!
    'password' => 'required|string',
]);

if (Auth::attempt($credentials)) {
    // login imefanikiwa...
}
        
        // Kama unatumia Sanctum kutengeneza Token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Umeingia kwa mafanikio!',
            'token' => $token,
            'user' => $user
        ], 200);
    }

    // 3. Ikifeli
    return response()->json([
        'message' => 'Username au Password si sahihi. Jaribu tena!'
    ], 401);
}
