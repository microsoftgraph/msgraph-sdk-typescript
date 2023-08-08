import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import type {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import type {TeamRenamedEventMessageDetail} from './teamRenamedEventMessageDetail';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamRenamedEventMessageDetail(teamRenamedEventMessageDetail: TeamRenamedEventMessageDetail | undefined = {} as TeamRenamedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamRenamedEventMessageDetail),
        "initiator": n => { teamRenamedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamDisplayName": n => { teamRenamedEventMessageDetail.teamDisplayName = n.getStringValue(); },
        "teamId": n => { teamRenamedEventMessageDetail.teamId = n.getStringValue(); },
    }
}
