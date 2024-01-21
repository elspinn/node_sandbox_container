import {describe, it} from "node:test";
import {greet} from '../src/greeting.js';
import assert from "node:assert";

describe('greeting function', () => {
    it('returns default greeting', () => {
        assert.equal(greet(), `Hello there fellow Node monster!`)
    });
})