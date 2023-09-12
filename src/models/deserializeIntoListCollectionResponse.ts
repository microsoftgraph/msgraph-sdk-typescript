import { createListFromDiscriminatorValue } from './createListFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type List } from './list';
import { type ListCollectionResponse } from './listCollectionResponse';
import { serializeList } from './serializeList';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoListCollectionResponse(listCollectionResponse: ListCollectionResponse | undefined = {} as ListCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(listCollectionResponse),
        "value": n => { listCollectionResponse.value = n.getCollectionOfObjectValues<List>(createListFromDiscriminatorValue); },
    }
}
