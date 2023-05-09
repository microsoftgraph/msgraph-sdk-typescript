import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamJoiningEnabledEventMessageDetail} from './teamJoiningEnabledEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamJoiningEnabledEventMessageDetail(writer: SerializationWriter, teamJoiningEnabledEventMessageDetail: TeamJoiningEnabledEventMessageDetail | undefined = {} as TeamJoiningEnabledEventMessageDetail) : void {
        serializeEventMessageDetail(writer, teamJoiningEnabledEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", teamJoiningEnabledEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeStringValue("teamId", teamJoiningEnabledEventMessageDetail.teamId);
}
