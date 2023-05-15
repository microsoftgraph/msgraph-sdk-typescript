import {IdentitySet} from './identitySet';
import {MembersAddedEventMessageDetail} from './membersAddedEventMessageDetail';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMembersAddedEventMessageDetail(writer: SerializationWriter, membersAddedEventMessageDetail: MembersAddedEventMessageDetail | undefined = {} as MembersAddedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, membersAddedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", membersAddedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeCollectionOfObjectValues<TeamworkUserIdentity>("members", membersAddedEventMessageDetail.members, serializeTeamworkUserIdentity);
        writer.writeDateValue("visibleHistoryStartDateTime", membersAddedEventMessageDetail.visibleHistoryStartDateTime);
}
