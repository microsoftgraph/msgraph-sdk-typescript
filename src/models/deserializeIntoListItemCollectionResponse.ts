import {createListItemFromDiscriminatorValue} from './createListItemFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ListItem} from './listItem';
import {ListItemCollectionResponse} from './listItemCollectionResponse';
import {serializeListItem} from './serializeListItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoListItemCollectionResponse(listItemCollectionResponse: ListItemCollectionResponse | undefined = {} as ListItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(listItemCollectionResponse),
        "value": n => { listItemCollectionResponse.value = n.getCollectionOfObjectValues<ListItem>(createListItemFromDiscriminatorValue); },
    }
}
