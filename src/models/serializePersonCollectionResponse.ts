import { type Person } from './person';
import { type PersonCollectionResponse } from './personCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializePerson } from './serializePerson';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePersonCollectionResponse(writer: SerializationWriter, personCollectionResponse: PersonCollectionResponse | undefined = {} as PersonCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, personCollectionResponse)
        writer.writeCollectionOfObjectValues<Person>("value", personCollectionResponse.value, serializePerson);
}
