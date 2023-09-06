import { type ContentSharingSession } from './contentSharingSession';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoContentSharingSession(contentSharingSession: ContentSharingSession | undefined = {} as ContentSharingSession) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(contentSharingSession),
    }
}
