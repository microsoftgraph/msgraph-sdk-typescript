import { type AuthoredNote } from './authoredNote';
import { type AuthoredNoteCollectionResponse } from './authoredNoteCollectionResponse';
import { createAuthoredNoteFromDiscriminatorValue } from './createAuthoredNoteFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAuthoredNote } from './serializeAuthoredNote';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthoredNoteCollectionResponse(authoredNoteCollectionResponse: AuthoredNoteCollectionResponse | undefined = {} as AuthoredNoteCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(authoredNoteCollectionResponse),
        "value": n => { authoredNoteCollectionResponse.value = n.getCollectionOfObjectValues<AuthoredNote>(createAuthoredNoteFromDiscriminatorValue); },
    }
}
