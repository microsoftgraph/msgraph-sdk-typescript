import {createTeamworkUserIdentityFromDiscriminatorValue} from '../../../../../models/createTeamworkUserIdentityFromDiscriminatorValue';
import {serializeTeamworkUserIdentity} from '../../../../../models/serializeTeamworkUserIdentity';
import {TeamworkUserIdentity} from '../../../../../models/teamworkUserIdentity';
import {MarkChatUnreadForUserPostRequestBody} from './markChatUnreadForUserPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMarkChatUnreadForUserPostRequestBody(markChatUnreadForUserPostRequestBody: MarkChatUnreadForUserPostRequestBody | undefined = {} as MarkChatUnreadForUserPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "lastMessageReadDateTime": n => { markChatUnreadForUserPostRequestBody.lastMessageReadDateTime = n.getDateValue(); },
        "user": n => { markChatUnreadForUserPostRequestBody.user = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
    }
}
