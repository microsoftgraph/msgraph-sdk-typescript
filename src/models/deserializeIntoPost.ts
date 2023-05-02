import {Attachment} from './attachment';
import {createAttachmentFromDiscriminatorValue} from './createAttachmentFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createPostFromDiscriminatorValue} from './createPostFromDiscriminatorValue';
import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {deserializeIntoOutlookItem} from './deserializeIntoOutlookItem';
import {Extension} from './extension';
import {ItemBody} from './itemBody';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {Post} from './post';
import {Recipient} from './recipient';
import {serializeAttachment} from './serializeAttachment';
import {serializeExtension} from './serializeExtension';
import {serializeItemBody} from './serializeItemBody';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializePost} from './serializePost';
import {serializeRecipient} from './serializeRecipient';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPost(post: Post | undefined = {} as Post) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOutlookItem(post),
        "attachments": n => { post.attachments = n.getCollectionOfObjectValues<Attachment>(createAttachmentFromDiscriminatorValue); },
        "body": n => { post.body = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
        "conversationId": n => { post.conversationId = n.getStringValue(); },
        "conversationThreadId": n => { post.conversationThreadId = n.getStringValue(); },
        "extensions": n => { post.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
        "from": n => { post.from = n.getObjectValue<Recipient>(createRecipientFromDiscriminatorValue); },
        "hasAttachments": n => { post.hasAttachments = n.getBooleanValue(); },
        "inReplyTo": n => { post.inReplyTo = n.getObjectValue<Post>(createPostFromDiscriminatorValue); },
        "multiValueExtendedProperties": n => { post.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
        "newParticipants": n => { post.newParticipants = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); },
        "receivedDateTime": n => { post.receivedDateTime = n.getDateValue(); },
        "sender": n => { post.sender = n.getObjectValue<Recipient>(createRecipientFromDiscriminatorValue); },
        "singleValueExtendedProperties": n => { post.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
    }
}
