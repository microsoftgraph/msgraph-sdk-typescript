import { deserializeIntoNotebook } from './deserializeIntoNotebook';
import { type Notebook } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNotebookFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNotebook;
}
