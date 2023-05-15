import {createItemActivityStatFromDiscriminatorValue} from './createItemActivityStatFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ItemActivityStat} from './itemActivityStat';
import {ItemActivityStatCollectionResponse} from './itemActivityStatCollectionResponse';
import {serializeItemActivityStat} from './serializeItemActivityStat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemActivityStatCollectionResponse(itemActivityStatCollectionResponse: ItemActivityStatCollectionResponse | undefined = {} as ItemActivityStatCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(itemActivityStatCollectionResponse),
        "value": n => { itemActivityStatCollectionResponse.value = n.getCollectionOfObjectValues<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); },
    }
}
