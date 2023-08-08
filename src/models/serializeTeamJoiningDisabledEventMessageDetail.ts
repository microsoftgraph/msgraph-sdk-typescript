import type {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import type {TeamJoiningDisabledEventMessageDetail} from './teamJoiningDisabledEventMessageDetail';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamJoiningDisabledEventMessageDetail(writer: SerializationWriter, teamJoiningDisabledEventMessageDetail: TeamJoiningDisabledEventMessageDetail | undefined = {} as TeamJoiningDisabledEventMessageDetail) : void {
        serializeEventMessageDetail(writer, teamJoiningDisabledEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", teamJoiningDisabledEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeStringValue("teamId", teamJoiningDisabledEventMessageDetail.teamId);
}
