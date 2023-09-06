import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEventMessageDetail } from './deserializeIntoEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type TeamDescriptionUpdatedEventMessageDetail } from './teamDescriptionUpdatedEventMessageDetail';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamDescriptionUpdatedEventMessageDetail(teamDescriptionUpdatedEventMessageDetail: TeamDescriptionUpdatedEventMessageDetail | undefined = {} as TeamDescriptionUpdatedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamDescriptionUpdatedEventMessageDetail),
        "initiator": n => { teamDescriptionUpdatedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamDescription": n => { teamDescriptionUpdatedEventMessageDetail.teamDescription = n.getStringValue(); },
        "teamId": n => { teamDescriptionUpdatedEventMessageDetail.teamId = n.getStringValue(); },
    }
}
