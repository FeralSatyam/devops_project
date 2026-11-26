import test from 'node:test'
import assert from 'node:assert/strict'
import { menuItems } from '../src/menu.js'

test('menu has uniquely identified items with complete order details', () => {
  assert.equal(menuItems.length, 4)
  assert.equal(new Set(menuItems.map((item) => item.id)).size, menuItems.length)

  for (const item of menuItems) {
    assert.ok(item.name.trim())
    assert.ok(item.description.trim())
    assert.match(item.portion, /^\d+ pieces$/)
    assert.ok(Number.isInteger(item.price) && item.price > 0)
  }
})
