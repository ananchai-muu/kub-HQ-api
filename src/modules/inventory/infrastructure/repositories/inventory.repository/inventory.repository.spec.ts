import { InventoryRepository } from './inventory.repository';

describe('InventoryRepository', () => {
  it('should be defined', () => {
    expect(new InventoryRepository()).toBeDefined();
  });
});
