import { ICellModel } from '../../node_modules/@jupyterlab/cells/lib/model'
import { INotebookModel } from '@jupyterlab/notebook/lib/model'
import { IMargoTreeNotebookModel } from './interfaces'


/**
 * Get an empty tree notebook 
 */
function getEmptyTreeNotebook(): IMargoTreeNotebookModel {
    return { cells: [] }
}

/**
 * Convert a jupyterlab notebook model to a tree representation
 * @param {INotebookModel} notebookModel: The original notebook model
 * @returns {IMargoTreeCellModel}: The tree representation
 */
export function fromNotebookModel(notebookModel: INotebookModel): IMargoTreeNotebookModel {

    let ret = getEmptyTreeNotebook()

    return ret

}

