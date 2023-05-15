import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamJoiningEnabledEventMessageDetail} from './teamJoiningEnabledEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamJoiningEnabledEventMessageDetail(teamJoiningEnabledEventMessageDetail: TeamJoiningEnabledEventMessageDetail | undefined = {} as TeamJoiningEnabledEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamJoiningEnabledEventMessageDetail),
        "initiator": n => { teamJoiningEnabledEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamId": n => { teamJoiningEnabledEventMessageDetail.teamId = n.getStringValue(); },
    }
}
