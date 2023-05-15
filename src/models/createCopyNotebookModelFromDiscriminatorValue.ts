import {deserializeIntoCopyNotebookModel} from './deserializeIntoCopyNotebookModel';
import {CopyNotebookModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyNotebookModelFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCopyNotebookModel;
}
