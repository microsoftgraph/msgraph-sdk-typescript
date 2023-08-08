import {createListItemVersionFromDiscriminatorValue} from './createListItemVersionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {ListItemVersion} from './listItemVersion';
import type {ListItemVersionCollectionResponse} from './listItemVersionCollectionResponse';
import {serializeListItemVersion} from './serializeListItemVersion';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoListItemVersionCollectionResponse(listItemVersionCollectionResponse: ListItemVersionCollectionResponse | undefined = {} as ListItemVersionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(listItemVersionCollectionResponse),
        "value": n => { listItemVersionCollectionResponse.value = n.getCollectionOfObjectValues<ListItemVersion>(createListItemVersionFromDiscriminatorValue); },
    }
}
