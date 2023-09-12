import { serializeTeamworkUserIdentity } from '../../../../../models/serializeTeamworkUserIdentity';
import { type TeamworkUserIdentity } from '../../../../../models/teamworkUserIdentity';
import { type MarkChatUnreadForUserPostRequestBody } from './markChatUnreadForUserPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMarkChatUnreadForUserPostRequestBody(writer: SerializationWriter, markChatUnreadForUserPostRequestBody: MarkChatUnreadForUserPostRequestBody | undefined = {} as MarkChatUnreadForUserPostRequestBody) : void {
        writer.writeDateValue("lastMessageReadDateTime", markChatUnreadForUserPostRequestBody.lastMessageReadDateTime);
        writer.writeObjectValue<TeamworkUserIdentity>("user", markChatUnreadForUserPostRequestBody.user, serializeTeamworkUserIdentity);
        writer.writeAdditionalData(markChatUnreadForUserPostRequestBody.additionalData);
}
