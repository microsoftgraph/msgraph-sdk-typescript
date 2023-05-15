import {IdentitySet} from './identitySet';
import {MembersDeletedEventMessageDetail} from './membersDeletedEventMessageDetail';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMembersDeletedEventMessageDetail(writer: SerializationWriter, membersDeletedEventMessageDetail: MembersDeletedEventMessageDetail | undefined = {} as MembersDeletedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, membersDeletedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", membersDeletedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeCollectionOfObjectValues<TeamworkUserIdentity>("members", membersDeletedEventMessageDetail.members, serializeTeamworkUserIdentity);
}
