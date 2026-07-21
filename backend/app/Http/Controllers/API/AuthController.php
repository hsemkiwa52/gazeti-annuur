<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // 1. Validating the username and password
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        // 2. Getting the credentials from request
        $credentials = $request->only('username', 'password');

        // 3. Attempting to login the user
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            
            // Generating token for the logged-in user
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message' => 'Umeingia kwa mafanikio',
                'token' => $token,
                'user' => $user
            ], 200);
        }

        // If credentials don't match
        return response()->json([
            'message' => 'Taarifa za kuingia si sahihi'
        ], 401);
    }
}