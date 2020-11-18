import { ICellModel } from '@jupyterlab/cells/lib/model'
import { INotebookModel } from '@jupyterlab/notebook/lib/model'
import { IMargoTreeNotebookModel } from '../model/interfaces'


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
export function convertMTM2Notebook(notebookModel: INotebookModel): IMargoTreeNotebookModel {

    let ret = getEmptyTreeNotebook()

    return ret

}

