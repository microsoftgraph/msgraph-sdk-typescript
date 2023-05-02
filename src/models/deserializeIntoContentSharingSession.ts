import {ContentSharingSession} from './contentSharingSession';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentSharingSession(contentSharingSession: ContentSharingSession | undefined = {} as ContentSharingSession) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(contentSharingSession),
    }
}
