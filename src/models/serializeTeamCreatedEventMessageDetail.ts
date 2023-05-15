import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamCreatedEventMessageDetail} from './teamCreatedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamCreatedEventMessageDetail(writer: SerializationWriter, teamCreatedEventMessageDetail: TeamCreatedEventMessageDetail | undefined = {} as TeamCreatedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, teamCreatedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", teamCreatedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeStringValue("teamDescription", teamCreatedEventMessageDetail.teamDescription);
        writer.writeStringValue("teamDisplayName", teamCreatedEventMessageDetail.teamDisplayName);
        writer.writeStringValue("teamId", teamCreatedEventMessageDetail.teamId);
}
