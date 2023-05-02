import {createListFromDiscriminatorValue} from './createListFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {List} from './list';
import {ListCollectionResponse} from './listCollectionResponse';
import {serializeList} from './serializeList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoListCollectionResponse(listCollectionResponse: ListCollectionResponse | undefined = {} as ListCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(listCollectionResponse),
        "value": n => { listCollectionResponse.value = n.getCollectionOfObjectValues<List>(createListFromDiscriminatorValue); },
    }
}
