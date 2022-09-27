import {SortPropertyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSortPropertyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SortPropertyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SortPropertyCollectionResponse();
}
