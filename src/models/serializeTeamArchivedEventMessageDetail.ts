import { type IdentitySet } from './identitySet';
import { serializeEventMessageDetail } from './serializeEventMessageDetail';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type TeamArchivedEventMessageDetail } from './teamArchivedEventMessageDetail';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamArchivedEventMessageDetail(writer: SerializationWriter, teamArchivedEventMessageDetail: TeamArchivedEventMessageDetail | undefined = {} as TeamArchivedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, teamArchivedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", teamArchivedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeStringValue("teamId", teamArchivedEventMessageDetail.teamId);
}
