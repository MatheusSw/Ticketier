<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('identifier', false)->unique();
            $table->string('title');
            $table->text('description');
            $table->foreignId('impact_id')->constrained('impacts','id');
            $table->foreignId('created_by_id')->constrained('users','id');
            $table->foreignId('status_id')->constrained('ticket_statuses','id');
            $table->time('estimated_labour');
            $table->timestamps();
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
}
