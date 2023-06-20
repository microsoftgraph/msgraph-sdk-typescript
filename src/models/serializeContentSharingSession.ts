import {ContentSharingSession} from './contentSharingSession';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentSharingSession(contentSharingSession: ContentSharingSession | undefined = {} as ContentSharingSession, writer: SerializationWriter) : void {
        serializeEntity(writer, contentSharingSession)
}
