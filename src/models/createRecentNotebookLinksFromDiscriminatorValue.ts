import { deserializeIntoRecentNotebookLinks } from './deserializeIntoRecentNotebookLinks';
import { type RecentNotebookLinks } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRecentNotebookLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecentNotebookLinks;
}
