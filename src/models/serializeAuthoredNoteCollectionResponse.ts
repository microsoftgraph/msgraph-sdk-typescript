import type {AuthoredNote} from './authoredNote';
import type {AuthoredNoteCollectionResponse} from './authoredNoteCollectionResponse';
import {serializeAuthoredNote} from './serializeAuthoredNote';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthoredNoteCollectionResponse(writer: SerializationWriter, authoredNoteCollectionResponse: AuthoredNoteCollectionResponse | undefined = {} as AuthoredNoteCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authoredNoteCollectionResponse)
        writer.writeCollectionOfObjectValues<AuthoredNote>("value", authoredNoteCollectionResponse.value, serializeAuthoredNote);
}
