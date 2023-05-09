import {Person} from './person';
import {PersonCollectionResponse} from './personCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePerson} from './serializePerson';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonCollectionResponse(writer: SerializationWriter, personCollectionResponse: PersonCollectionResponse | undefined = {} as PersonCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, personCollectionResponse)
        writer.writeCollectionOfObjectValues<Person>("value", personCollectionResponse.value, serializePerson);
}
