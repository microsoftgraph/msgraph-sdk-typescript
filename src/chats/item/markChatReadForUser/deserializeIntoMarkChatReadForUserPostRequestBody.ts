import {createTeamworkUserIdentityFromDiscriminatorValue} from '../../../models/createTeamworkUserIdentityFromDiscriminatorValue';
import {serializeTeamworkUserIdentity} from '../../../models/serializeTeamworkUserIdentity';
import {TeamworkUserIdentity} from '../../../models/teamworkUserIdentity';
import {MarkChatReadForUserPostRequestBody} from './markChatReadForUserPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMarkChatReadForUserPostRequestBody(markChatReadForUserPostRequestBody: MarkChatReadForUserPostRequestBody | undefined = {} as MarkChatReadForUserPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "user": n => { markChatReadForUserPostRequestBody.user = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
    }
}
