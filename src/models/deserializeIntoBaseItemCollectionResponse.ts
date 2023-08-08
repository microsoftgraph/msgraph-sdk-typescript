import type {BaseItem} from './baseItem';
import type {BaseItemCollectionResponse} from './baseItemCollectionResponse';
import {createBaseItemFromDiscriminatorValue} from './createBaseItemFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeBaseItem} from './serializeBaseItem';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBaseItemCollectionResponse(baseItemCollectionResponse: BaseItemCollectionResponse | undefined = {} as BaseItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(baseItemCollectionResponse),
        "value": n => { baseItemCollectionResponse.value = n.getCollectionOfObjectValues<BaseItem>(createBaseItemFromDiscriminatorValue); },
    }
}
