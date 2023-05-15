import {deserializeIntoRecentNotebookLinks} from './deserializeIntoRecentNotebookLinks';
import {RecentNotebookLinks} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecentNotebookLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecentNotebookLinks;
}
