<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    /**
     * Get the impact for this ticket
     */
    public function impact()
    {
        return $this->belongsTo(Impact::class);
    }

    /**
     * Get the status for this ticket
     */
    public function ticket_status()
    {
        return $this->belongsTo(TicketStatus::class, 'status_id');
    }

    /**
     * Get the creator of this ticket
     */
    public function created_by()
    {
        return $this->belongsTo(User::class, 'created_by_id');
    }
}
