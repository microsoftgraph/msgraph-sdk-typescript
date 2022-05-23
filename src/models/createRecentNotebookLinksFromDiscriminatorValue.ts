import {RecentNotebookLinksImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecentNotebookLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecentNotebookLinksImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecentNotebookLinksImpl();
}
