import { createCustomCalloutExtensionFromDiscriminatorValue } from './createCustomCalloutExtensionFromDiscriminatorValue';
import { type CustomCalloutExtension } from './customCalloutExtension';
import { type CustomCalloutExtensionCollectionResponse } from './customCalloutExtensionCollectionResponse';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeCustomCalloutExtension } from './serializeCustomCalloutExtension';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomCalloutExtensionCollectionResponse(customCalloutExtensionCollectionResponse: CustomCalloutExtensionCollectionResponse | undefined = {} as CustomCalloutExtensionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(customCalloutExtensionCollectionResponse),
        "value": n => { customCalloutExtensionCollectionResponse.value = n.getCollectionOfObjectValues<CustomCalloutExtension>(createCustomCalloutExtensionFromDiscriminatorValue); },
    }
}
