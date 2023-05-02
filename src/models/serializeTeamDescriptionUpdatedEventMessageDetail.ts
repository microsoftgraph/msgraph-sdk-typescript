import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamDescriptionUpdatedEventMessageDetail} from './teamDescriptionUpdatedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamDescriptionUpdatedEventMessageDetail(writer: SerializationWriter, teamDescriptionUpdatedEventMessageDetail: TeamDescriptionUpdatedEventMessageDetail | undefined = {} as TeamDescriptionUpdatedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, teamDescriptionUpdatedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", teamDescriptionUpdatedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeStringValue("teamDescription", teamDescriptionUpdatedEventMessageDetail.teamDescription);
        writer.writeStringValue("teamId", teamDescriptionUpdatedEventMessageDetail.teamId);
}
