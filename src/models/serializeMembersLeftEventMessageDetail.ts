import type {IdentitySet} from './identitySet';
import type {MembersLeftEventMessageDetail} from './membersLeftEventMessageDetail';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import type {TeamworkUserIdentity} from './teamworkUserIdentity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMembersLeftEventMessageDetail(writer: SerializationWriter, membersLeftEventMessageDetail: MembersLeftEventMessageDetail | undefined = {} as MembersLeftEventMessageDetail) : void {
        serializeEventMessageDetail(writer, membersLeftEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", membersLeftEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeCollectionOfObjectValues<TeamworkUserIdentity>("members", membersLeftEventMessageDetail.members, serializeTeamworkUserIdentity);
}
