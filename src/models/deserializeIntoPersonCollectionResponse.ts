import { createPersonFromDiscriminatorValue } from './createPersonFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type Person } from './person';
import { type PersonCollectionResponse } from './personCollectionResponse';
import { serializePerson } from './serializePerson';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonCollectionResponse(personCollectionResponse: PersonCollectionResponse | undefined = {} as PersonCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(personCollectionResponse),
        "value": n => { personCollectionResponse.value = n.getCollectionOfObjectValues<Person>(createPersonFromDiscriminatorValue); },
    }
}
