import { createTeamworkUserIdentityFromDiscriminatorValue } from '../../../models/createTeamworkUserIdentityFromDiscriminatorValue';
import { serializeTeamworkUserIdentity } from '../../../models/serializeTeamworkUserIdentity';
import { type TeamworkUserIdentity } from '../../../models/teamworkUserIdentity';
import { type MarkChatReadForUserPostRequestBody } from './markChatReadForUserPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMarkChatReadForUserPostRequestBody(markChatReadForUserPostRequestBody: MarkChatReadForUserPostRequestBody | undefined = {} as MarkChatReadForUserPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "user": n => { markChatReadForUserPostRequestBody.user = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
    }
}
