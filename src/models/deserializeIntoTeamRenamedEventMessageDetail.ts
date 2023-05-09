import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamRenamedEventMessageDetail} from './teamRenamedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamRenamedEventMessageDetail(teamRenamedEventMessageDetail: TeamRenamedEventMessageDetail | undefined = {} as TeamRenamedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamRenamedEventMessageDetail),
        "initiator": n => { teamRenamedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamDisplayName": n => { teamRenamedEventMessageDetail.teamDisplayName = n.getStringValue(); },
        "teamId": n => { teamRenamedEventMessageDetail.teamId = n.getStringValue(); },
    }
}
