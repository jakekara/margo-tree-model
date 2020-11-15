import { ICellModel } from '@jupyterlab/cells/lib/model'

export interface IMargoTreeCellModel {
    cell: ICellModel
    children: Array<ICellModel>
}

export interface IMargoTreeNotebookModel {
    cells: Array<IMargoTreeCellModel>
}




