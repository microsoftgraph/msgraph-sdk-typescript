import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamUnarchivedEventMessageDetail} from './teamUnarchivedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamUnarchivedEventMessageDetail(writer: SerializationWriter, teamUnarchivedEventMessageDetail: TeamUnarchivedEventMessageDetail | undefined = {} as TeamUnarchivedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, teamUnarchivedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", teamUnarchivedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeStringValue("teamId", teamUnarchivedEventMessageDetail.teamId);
}
