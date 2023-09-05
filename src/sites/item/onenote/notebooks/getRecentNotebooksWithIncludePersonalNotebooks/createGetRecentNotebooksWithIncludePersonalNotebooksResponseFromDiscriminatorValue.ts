import { deserializeIntoGetRecentNotebooksWithIncludePersonalNotebooksResponse } from './deserializeIntoGetRecentNotebooksWithIncludePersonalNotebooksResponse';
import { type GetRecentNotebooksWithIncludePersonalNotebooksResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetRecentNotebooksWithIncludePersonalNotebooksResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetRecentNotebooksWithIncludePersonalNotebooksResponse;
}
