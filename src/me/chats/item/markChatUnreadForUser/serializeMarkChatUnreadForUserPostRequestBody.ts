import {serializeTeamworkUserIdentity} from '../../../../models/serializeTeamworkUserIdentity';
import {TeamworkUserIdentity} from '../../../../models/teamworkUserIdentity';
import {MarkChatUnreadForUserPostRequestBody} from './markChatUnreadForUserPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMarkChatUnreadForUserPostRequestBody(writer: SerializationWriter, markChatUnreadForUserPostRequestBody: MarkChatUnreadForUserPostRequestBody | undefined = {} as MarkChatUnreadForUserPostRequestBody) : void {
        writer.writeDateValue("lastMessageReadDateTime", markChatUnreadForUserPostRequestBody.lastMessageReadDateTime);
        writer.writeObjectValue<TeamworkUserIdentity>("user", markChatUnreadForUserPostRequestBody.user, serializeTeamworkUserIdentity);
        writer.writeAdditionalData(markChatUnreadForUserPostRequestBody.additionalData);
}
