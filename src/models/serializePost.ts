import {Attachment} from './attachment';
import {Extension} from './extension';
import {ItemBody} from './itemBody';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {Post} from './post';
import {Recipient} from './recipient';
import {serializeAttachment} from './serializeAttachment';
import {serializeExtension} from './serializeExtension';
import {serializeItemBody} from './serializeItemBody';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializeOutlookItem} from './serializeOutlookItem';
import {serializeRecipient} from './serializeRecipient';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePost(writer: SerializationWriter, post: Post | undefined = {} as Post) : void {
        serializeOutlookItem(writer, post)
        writer.writeCollectionOfObjectValues<Attachment>("attachments", post.attachments, serializeAttachment);
        writer.writeObjectValue<ItemBody>("body", post.body, serializeItemBody);
        writer.writeStringValue("conversationId", post.conversationId);
        writer.writeStringValue("conversationThreadId", post.conversationThreadId);
        writer.writeCollectionOfObjectValues<Extension>("extensions", post.extensions, serializeExtension);
        writer.writeObjectValue<Recipient>("from", post.from, serializeRecipient);
        writer.writeBooleanValue("hasAttachments", post.hasAttachments);
        writer.writeObjectValue<Post>("inReplyTo", post.inReplyTo, serializePost);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", post.multiValueExtendedProperties, serializeMultiValueLegacyExtendedProperty);
        writer.writeCollectionOfObjectValues<Recipient>("newParticipants", post.newParticipants, serializeRecipient);
        writer.writeDateValue("receivedDateTime", post.receivedDateTime);
        writer.writeObjectValue<Recipient>("sender", post.sender, serializeRecipient);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", post.singleValueExtendedProperties, serializeSingleValueLegacyExtendedProperty);
}
