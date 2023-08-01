import type {AuthoredNote} from './authoredNote';
import type {Identity} from './identity';
import type {ItemBody} from './itemBody';
import {serializeEntity} from './serializeEntity';
import {serializeIdentity} from './serializeIdentity';
import {serializeItemBody} from './serializeItemBody';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthoredNote(writer: SerializationWriter, authoredNote: AuthoredNote | undefined = {} as AuthoredNote) : void {
        serializeEntity(writer, authoredNote)
        writer.writeObjectValue<Identity>("author", authoredNote.author, serializeIdentity);
        writer.writeObjectValue<ItemBody>("content", authoredNote.content, serializeItemBody);
        writer.writeDateValue("createdDateTime", authoredNote.createdDateTime);
}
