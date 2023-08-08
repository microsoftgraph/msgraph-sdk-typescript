import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createTeamworkUserIdentityFromDiscriminatorValue} from './createTeamworkUserIdentityFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import type {IdentitySet} from './identitySet';
import type {MembersJoinedEventMessageDetail} from './membersJoinedEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import type {TeamworkUserIdentity} from './teamworkUserIdentity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMembersJoinedEventMessageDetail(membersJoinedEventMessageDetail: MembersJoinedEventMessageDetail | undefined = {} as MembersJoinedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(membersJoinedEventMessageDetail),
        "initiator": n => { membersJoinedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "members": n => { membersJoinedEventMessageDetail.members = n.getCollectionOfObjectValues<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
    }
}
