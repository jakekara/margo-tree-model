import { ICellModel } from '@jupyterlab/cells/lib/index'
import { IMargoTreeCellModel } from './interfaces'

import { api } from 'margo-parser-ts'
import { sources } from 'webpack'

/**
 * Get a tree cell that represents a jupyterlab cell
 */
export function fromNotebookCell(cell: ICellModel) {
    const children: Array<IMargoTreeCellModel> = []
    return { cell, children }
}

/**
 * Given a cell, return its margo-defined cellID
 * @param cell 
 */
export function getCellID(cellSource: string): unknown | undefined {

    return api.getDeclaredValue("cell.id", api.convertToMargoBlock(cellSource))


}
