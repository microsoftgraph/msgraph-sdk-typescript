import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createTeamworkUserIdentityFromDiscriminatorValue} from './createTeamworkUserIdentityFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import type {IdentitySet} from './identitySet';
import type {MembersLeftEventMessageDetail} from './membersLeftEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import type {TeamworkUserIdentity} from './teamworkUserIdentity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMembersLeftEventMessageDetail(membersLeftEventMessageDetail: MembersLeftEventMessageDetail | undefined = {} as MembersLeftEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(membersLeftEventMessageDetail),
        "initiator": n => { membersLeftEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "members": n => { membersLeftEventMessageDetail.members = n.getCollectionOfObjectValues<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
    }
}
