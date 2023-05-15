import {deserializeIntoGetRecentNotebooksWithIncludePersonalNotebooksResponse} from './deserializeIntoGetRecentNotebooksWithIncludePersonalNotebooksResponse';
import {GetRecentNotebooksWithIncludePersonalNotebooksResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetRecentNotebooksWithIncludePersonalNotebooksResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetRecentNotebooksWithIncludePersonalNotebooksResponse;
}
