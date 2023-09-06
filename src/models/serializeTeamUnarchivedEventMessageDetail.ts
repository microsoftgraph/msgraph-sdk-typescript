import { type IdentitySet } from './identitySet';
import { serializeEventMessageDetail } from './serializeEventMessageDetail';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type TeamUnarchivedEventMessageDetail } from './teamUnarchivedEventMessageDetail';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamUnarchivedEventMessageDetail(writer: SerializationWriter, teamUnarchivedEventMessageDetail: TeamUnarchivedEventMessageDetail | undefined = {} as TeamUnarchivedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, teamUnarchivedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", teamUnarchivedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeStringValue("teamId", teamUnarchivedEventMessageDetail.teamId);
}
