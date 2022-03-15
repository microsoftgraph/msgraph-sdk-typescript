import {RecentNotebookLinks} from './recentNotebookLinks';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecentNotebookLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecentNotebookLinks {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecentNotebookLinks();
}
