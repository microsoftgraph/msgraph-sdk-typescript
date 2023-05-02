import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamArchivedEventMessageDetail} from './teamArchivedEventMessageDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamArchivedEventMessageDetail(writer: SerializationWriter, teamArchivedEventMessageDetail: TeamArchivedEventMessageDetail | undefined = {} as TeamArchivedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, teamArchivedEventMessageDetail)
        writer.writeObjectValue<IdentitySet>("initiator", teamArchivedEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeStringValue("teamId", teamArchivedEventMessageDetail.teamId);
}
