<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('newspaper_pages', function (Blueprint $table) {
            $table->id();
            // Inatengeneza Uhusiano (Foreign Key) na jedwali la magazeti
            $table->foreignId('newspaper_id')->constrained()->onDelete('cascade'); 
            $table->integer('page_number');
            $table->string('image_path'); 
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('newspaper_pages');
    }
};
