import { deserializeIntoRecentNotebook } from './deserializeIntoRecentNotebook';
import { type RecentNotebook } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRecentNotebookFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecentNotebook;
}
