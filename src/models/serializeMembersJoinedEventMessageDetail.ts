import {IdentitySet} from './identitySet';
import {MembersJoinedEventMessageDetail} from './membersJoinedEventMessageDetail';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMembersJoinedEventMessageDetail(writer: SerializationWriter, membersJoinedEventMessageDetail: MembersJoinedEventMessageDetail | undefined = {} as MembersJoinedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, membersJoinedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", membersJoinedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeCollectionOfObjectValues<TeamworkUserIdentity>("members", membersJoinedEventMessageDetail.members, serializeTeamworkUserIdentity);
}
