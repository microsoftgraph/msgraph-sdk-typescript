import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import type {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import type {TeamJoiningDisabledEventMessageDetail} from './teamJoiningDisabledEventMessageDetail';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamJoiningDisabledEventMessageDetail(teamJoiningDisabledEventMessageDetail: TeamJoiningDisabledEventMessageDetail | undefined = {} as TeamJoiningDisabledEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(teamJoiningDisabledEventMessageDetail),
        "initiator": n => { teamJoiningDisabledEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "teamId": n => { teamJoiningDisabledEventMessageDetail.teamId = n.getStringValue(); },
    }
}
