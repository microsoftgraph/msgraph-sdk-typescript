import {createNamedLocationFromDiscriminatorValue} from './createNamedLocationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {NamedLocation} from './namedLocation';
import {NamedLocationCollectionResponse} from './namedLocationCollectionResponse';
import {serializeNamedLocation} from './serializeNamedLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNamedLocationCollectionResponse(namedLocationCollectionResponse: NamedLocationCollectionResponse | undefined = {} as NamedLocationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(namedLocationCollectionResponse),
        "value": n => { namedLocationCollectionResponse.value = n.getCollectionOfObjectValues<NamedLocation>(createNamedLocationFromDiscriminatorValue); },
    }
}
