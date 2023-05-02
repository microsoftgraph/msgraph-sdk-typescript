import {serializeTeamworkUserIdentity} from '../../../../models/serializeTeamworkUserIdentity';
import {TeamworkUserIdentity} from '../../../../models/teamworkUserIdentity';
import {MarkChatReadForUserPostRequestBody} from './markChatReadForUserPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMarkChatReadForUserPostRequestBody(writer: SerializationWriter, markChatReadForUserPostRequestBody: MarkChatReadForUserPostRequestBody | undefined = {} as MarkChatReadForUserPostRequestBody) : void {
        writer.writeObjectValue<TeamworkUserIdentity>("user", markChatReadForUserPostRequestBody.user, serializeTeamworkUserIdentity);
        writer.writeAdditionalData(markChatReadForUserPostRequestBody.additionalData);
}
