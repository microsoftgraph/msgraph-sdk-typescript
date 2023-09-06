import { serializeTeamworkUserIdentity } from '../../../../models/serializeTeamworkUserIdentity';
import { type TeamworkUserIdentity } from '../../../../models/teamworkUserIdentity';
import { type MarkChatReadForUserPostRequestBody } from './markChatReadForUserPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMarkChatReadForUserPostRequestBody(writer: SerializationWriter, markChatReadForUserPostRequestBody: MarkChatReadForUserPostRequestBody | undefined = {} as MarkChatReadForUserPostRequestBody) : void {
        writer.writeObjectValue<TeamworkUserIdentity>("user", markChatReadForUserPostRequestBody.user, serializeTeamworkUserIdentity);
        writer.writeAdditionalData(markChatReadForUserPostRequestBody.additionalData);
}
