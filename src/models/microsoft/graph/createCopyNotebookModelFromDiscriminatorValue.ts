import {CopyNotebookModel} from './copyNotebookModel';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyNotebookModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyNotebookModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyNotebookModel();
}
