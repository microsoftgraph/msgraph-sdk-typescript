import {RecentNotebookImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecentNotebookFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecentNotebookImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecentNotebookImpl();
}
