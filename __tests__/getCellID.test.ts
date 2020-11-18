import { getCellID } from '../src/tools/getCellID'

test("Can parse cell ID", () => {

    const cellSource = `
    cell.id : 'cell-abc' ::
    cell.id : 'cell-123' ::`.trim()

    expect(getCellID(cellSource)).toBe("cell-123")

})
