import {createPersonFromDiscriminatorValue} from './createPersonFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {Person} from './person';
import {PersonCollectionResponse} from './personCollectionResponse';
import {serializePerson} from './serializePerson';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonCollectionResponse(personCollectionResponse: PersonCollectionResponse | undefined = {} as PersonCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(personCollectionResponse),
        "value": n => { personCollectionResponse.value = n.getCollectionOfObjectValues<Person>(createPersonFromDiscriminatorValue); },
    }
}
