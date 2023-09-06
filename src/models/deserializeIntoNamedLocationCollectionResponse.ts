import { createNamedLocationFromDiscriminatorValue } from './createNamedLocationFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type NamedLocation } from './namedLocation';
import { type NamedLocationCollectionResponse } from './namedLocationCollectionResponse';
import { serializeNamedLocation } from './serializeNamedLocation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoNamedLocationCollectionResponse(namedLocationCollectionResponse: NamedLocationCollectionResponse | undefined = {} as NamedLocationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(namedLocationCollectionResponse),
        "value": n => { namedLocationCollectionResponse.value = n.getCollectionOfObjectValues<NamedLocation>(createNamedLocationFromDiscriminatorValue); },
    }
}
