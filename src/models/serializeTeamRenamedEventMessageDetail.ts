import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamRenamedEventMessageDetail} from './teamRenamedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamRenamedEventMessageDetail(writer: SerializationWriter, teamRenamedEventMessageDetail: TeamRenamedEventMessageDetail | undefined = {} as TeamRenamedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, teamRenamedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", teamRenamedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeStringValue("teamDisplayName", teamRenamedEventMessageDetail.teamDisplayName);
        writer.writeStringValue("teamId", teamRenamedEventMessageDetail.teamId);
}
