import {AuthoredNote} from './authoredNote';
import {AuthoredNoteCollectionResponse} from './authoredNoteCollectionResponse';
import {serializeAuthoredNote} from './serializeAuthoredNote';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthoredNoteCollectionResponse(authoredNoteCollectionResponse: AuthoredNoteCollectionResponse | undefined = {} as AuthoredNoteCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authoredNoteCollectionResponse)
        writer.writeCollectionOfObjectValues<AuthoredNote>("value", authoredNoteCollectionResponse.value, serializeAuthoredNote);
}
