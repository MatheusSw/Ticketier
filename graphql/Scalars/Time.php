<?php

namespace Ticketier\GraphQL\Scalars;

use Exception;
use GraphQL\Error\Error;
use GraphQL\Error\InvariantViolation;
use GraphQL\Language\AST\StringValueNode;
use GraphQL\Type\Definition\ScalarType;
use GraphQL\Utils\Utils;
use Illuminate\Support\Carbon;

class Time extends ScalarType
{
    /**
     * Serialize an internal value, ensuring it is a valid Time string.
     *
     * @param  \Illuminate\Support\Carbon|string  $value
     */
    public function serialize($value): string
    {
        if (! $value instanceof Carbon) {
            $value = $this->tryParseTime($value, InvariantViolation::class);
        }

        return $this->format($value);
    }

    /**
     * Parse a externally provided variable value into a Carbon instance.
     *
     * @param  string  $value
     */
    public function parseValue($value): Carbon
    {
        return $this->tryParseTime($value, Error::class);
    }

    /**
     * Parse a literal provided as part of a GraphQL query string into a Carbon instance.
     *
     * @param  \GraphQL\Language\AST\Node  $valueNode
     * @param  array<string, mixed>|null  $variables
     *
     * @throws \GraphQL\Error\Error
     */
    public function parseLiteral($valueNode, ?array $variables = null): Carbon
    {
        if (! $valueNode instanceof StringValueNode) {
            throw new Error(
                "Query error: Can only parse strings, got {$valueNode->kind}",
                $valueNode
            );
        }

        return $this->tryParseTime($valueNode->value, Error::class);
    }

    /**
     * Try to parse the given value into a Carbon instance, throw if it does not work.
     *
     * @param  string  $value
     * @param  class-string<\Exception>  $exceptionClass
     *
     * @throws \GraphQL\Error\InvariantViolation|\GraphQL\Error\Error
     */
    protected function tryParseTime($value, string $exceptionClass): Carbon
    {
        try {
            return $this->parse($value);
        } catch (Exception $e) {
            throw new $exceptionClass(
                Utils::printSafeJson($e->getMessage())
            );
        }
    }

    protected function format(Carbon $carbon): string
    {
        return $carbon->toTimeString();
    }

    protected function parse($value): Carbon
    {
        // @phpstan-ignore-next-line We know the format to be good, so this can never return `false`
        return Carbon::createFromTimeString($value); //TODO account for TimeZone
    }
}
