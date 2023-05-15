import {ContentSharingSession} from './contentSharingSession';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentSharingSession(writer: SerializationWriter, contentSharingSession: ContentSharingSession | undefined = {} as ContentSharingSession) : void {
        serializeEntity(writer, contentSharingSession)
}
