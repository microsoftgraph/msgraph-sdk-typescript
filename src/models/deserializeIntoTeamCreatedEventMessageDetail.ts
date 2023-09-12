import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEventMessageDetail } from './deserializeIntoEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type TeamCreatedEventMessageDetail } from './teamCreatedEventMessageDetail';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamCreatedEventMessageDetail(teamCreatedEventMessageDetail: TeamCreatedEventMessageDetail | undefined = {} as TeamCreatedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamCreatedEventMessageDetail),
        "initiator": n => { teamCreatedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamDescription": n => { teamCreatedEventMessageDetail.teamDescription = n.getStringValue(); },
        "teamDisplayName": n => { teamCreatedEventMessageDetail.teamDisplayName = n.getStringValue(); },
        "teamId": n => { teamCreatedEventMessageDetail.teamId = n.getStringValue(); },
    }
}
