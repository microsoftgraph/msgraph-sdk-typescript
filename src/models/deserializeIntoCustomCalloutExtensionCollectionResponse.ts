import {createCustomCalloutExtensionFromDiscriminatorValue} from './createCustomCalloutExtensionFromDiscriminatorValue';
import {CustomCalloutExtension} from './customCalloutExtension';
import {CustomCalloutExtensionCollectionResponse} from './customCalloutExtensionCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeCustomCalloutExtension} from './serializeCustomCalloutExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomCalloutExtensionCollectionResponse(customCalloutExtensionCollectionResponse: CustomCalloutExtensionCollectionResponse | undefined = {} as CustomCalloutExtensionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(customCalloutExtensionCollectionResponse),
        "value": n => { customCalloutExtensionCollectionResponse.value = n.getCollectionOfObjectValues<CustomCalloutExtension>(createCustomCalloutExtensionFromDiscriminatorValue); },
    }
}
