import { deserializeIntoNotebookLinks } from './deserializeIntoNotebookLinks';
import { type NotebookLinks } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNotebookLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNotebookLinks;
}
