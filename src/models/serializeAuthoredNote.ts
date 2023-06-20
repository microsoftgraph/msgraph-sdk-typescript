import {AuthoredNote} from './authoredNote';
import {Identity} from './identity';
import {ItemBody} from './itemBody';
import {serializeEntity} from './serializeEntity';
import {serializeIdentity} from './serializeIdentity';
import {serializeItemBody} from './serializeItemBody';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthoredNote(authoredNote: AuthoredNote | undefined = {} as AuthoredNote, writer: SerializationWriter) : void {
        serializeEntity(writer, authoredNote)
        writer.writeObjectValue<Identity>("author", authoredNote.author, serializeIdentity);
        writer.writeObjectValue<ItemBody>("content", authoredNote.content, serializeItemBody);
        writer.writeDateValue("createdDateTime", authoredNote.createdDateTime);
}
