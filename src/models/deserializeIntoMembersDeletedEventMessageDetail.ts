import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { createTeamworkUserIdentityFromDiscriminatorValue } from './createTeamworkUserIdentityFromDiscriminatorValue';
import { deserializeIntoEventMessageDetail } from './deserializeIntoEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { type MembersDeletedEventMessageDetail } from './membersDeletedEventMessageDetail';
import { serializeIdentitySet } from './serializeIdentitySet';
import { serializeTeamworkUserIdentity } from './serializeTeamworkUserIdentity';
import { type TeamworkUserIdentity } from './teamworkUserIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMembersDeletedEventMessageDetail(membersDeletedEventMessageDetail: MembersDeletedEventMessageDetail | undefined = {} as MembersDeletedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(membersDeletedEventMessageDetail),
        "initiator": n => { membersDeletedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "members": n => { membersDeletedEventMessageDetail.members = n.getCollectionOfObjectValues<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
    }
}
