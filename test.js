console.log('Running tests...');

// Simple test
const assert = require('assert');

try {
  assert.strictEqual(1 + 1, 2);
  assert.strictEqual('hello'.toUpperCase(), 'HELLO');
  console.log('✅ All tests passed!');
  process.exit(0);
} catch (error) {
  console.error('❌ Tests failed:', error.message);
  process.exit(1);
}
