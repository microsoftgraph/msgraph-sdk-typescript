import {serializeEntity} from './serializeEntity';
import {serializeTeam} from './serializeTeam';
import type {Team} from './team';
import type {TeamInfo} from './teamInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamInfo(writer: SerializationWriter, teamInfo: TeamInfo | undefined = {} as TeamInfo) : void {
        serializeEntity(writer, teamInfo)
        writer.writeStringValue("displayName", teamInfo.displayName);
        writer.writeObjectValue<Team>("team", teamInfo.team, serializeTeam);
        writer.writeStringValue("tenantId", teamInfo.tenantId);
}
