import { type ContentSharingSession } from './contentSharingSession';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeContentSharingSession(writer: SerializationWriter, contentSharingSession: ContentSharingSession | undefined = {} as ContentSharingSession) : void {
        serializeEntity(writer, contentSharingSession)
}
