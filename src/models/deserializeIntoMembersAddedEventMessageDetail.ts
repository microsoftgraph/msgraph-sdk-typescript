import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { createTeamworkUserIdentityFromDiscriminatorValue } from './createTeamworkUserIdentityFromDiscriminatorValue';
import { deserializeIntoEventMessageDetail } from './deserializeIntoEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { type MembersAddedEventMessageDetail } from './membersAddedEventMessageDetail';
import { serializeIdentitySet } from './serializeIdentitySet';
import { serializeTeamworkUserIdentity } from './serializeTeamworkUserIdentity';
import { type TeamworkUserIdentity } from './teamworkUserIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMembersAddedEventMessageDetail(membersAddedEventMessageDetail: MembersAddedEventMessageDetail | undefined = {} as MembersAddedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(membersAddedEventMessageDetail),
        "initiator": n => { membersAddedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "members": n => { membersAddedEventMessageDetail.members = n.getCollectionOfObjectValues<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
        "visibleHistoryStartDateTime": n => { membersAddedEventMessageDetail.visibleHistoryStartDateTime = n.getDateValue(); },
    }
}
