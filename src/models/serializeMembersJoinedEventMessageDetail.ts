import { type IdentitySet } from './identitySet';
import { type MembersJoinedEventMessageDetail } from './membersJoinedEventMessageDetail';
import { serializeEventMessageDetail } from './serializeEventMessageDetail';
import { serializeIdentitySet } from './serializeIdentitySet';
import { serializeTeamworkUserIdentity } from './serializeTeamworkUserIdentity';
import { type TeamworkUserIdentity } from './teamworkUserIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMembersJoinedEventMessageDetail(writer: SerializationWriter, membersJoinedEventMessageDetail: MembersJoinedEventMessageDetail | undefined = {} as MembersJoinedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, membersJoinedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", membersJoinedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeCollectionOfObjectValues<TeamworkUserIdentity>("members", membersJoinedEventMessageDetail.members, serializeTeamworkUserIdentity);
}
