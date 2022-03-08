import {ListItemVersionCollectionResponse} from './listItemVersionCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListItemVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ListItemVersionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ListItemVersionCollectionResponse();
}
