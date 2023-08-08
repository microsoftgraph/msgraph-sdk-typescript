import type {NamedLocation} from './namedLocation';
import type {NamedLocationCollectionResponse} from './namedLocationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeNamedLocation} from './serializeNamedLocation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNamedLocationCollectionResponse(writer: SerializationWriter, namedLocationCollectionResponse: NamedLocationCollectionResponse | undefined = {} as NamedLocationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, namedLocationCollectionResponse)
        writer.writeCollectionOfObjectValues<NamedLocation>("value", namedLocationCollectionResponse.value, serializeNamedLocation);
}
