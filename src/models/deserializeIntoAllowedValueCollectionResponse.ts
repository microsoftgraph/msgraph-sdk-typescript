import type {AllowedValue} from './allowedValue';
import type {AllowedValueCollectionResponse} from './allowedValueCollectionResponse';
import {createAllowedValueFromDiscriminatorValue} from './createAllowedValueFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAllowedValue} from './serializeAllowedValue';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAllowedValueCollectionResponse(allowedValueCollectionResponse: AllowedValueCollectionResponse | undefined = {} as AllowedValueCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(allowedValueCollectionResponse),
        "value": n => { allowedValueCollectionResponse.value = n.getCollectionOfObjectValues<AllowedValue>(createAllowedValueFromDiscriminatorValue); },
    }
}
