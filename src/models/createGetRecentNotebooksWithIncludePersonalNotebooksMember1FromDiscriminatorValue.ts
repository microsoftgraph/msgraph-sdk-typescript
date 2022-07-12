import {GetRecentNotebooksWithIncludePersonalNotebooksMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetRecentNotebooksWithIncludePersonalNotebooksMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetRecentNotebooksWithIncludePersonalNotebooksMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetRecentNotebooksWithIncludePersonalNotebooksMember1();
}
