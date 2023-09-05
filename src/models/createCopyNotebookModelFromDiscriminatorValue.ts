import { deserializeIntoCopyNotebookModel } from './deserializeIntoCopyNotebookModel';
import { type CopyNotebookModel } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCopyNotebookModelFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCopyNotebookModel;
}
