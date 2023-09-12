import { serializeTeamworkUserIdentity } from './serializeTeamworkUserIdentity';
import { type TeamworkOnlineMeetingInfo } from './teamworkOnlineMeetingInfo';
import { type TeamworkUserIdentity } from './teamworkUserIdentity';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamworkOnlineMeetingInfo(writer: SerializationWriter, teamworkOnlineMeetingInfo: TeamworkOnlineMeetingInfo | undefined = {} as TeamworkOnlineMeetingInfo) : void {
        writer.writeStringValue("calendarEventId", teamworkOnlineMeetingInfo.calendarEventId);
        writer.writeStringValue("joinWebUrl", teamworkOnlineMeetingInfo.joinWebUrl);
        writer.writeStringValue("@odata.type", teamworkOnlineMeetingInfo.odataType);
        writer.writeObjectValue<TeamworkUserIdentity>("organizer", teamworkOnlineMeetingInfo.organizer, serializeTeamworkUserIdentity);
        writer.writeAdditionalData(teamworkOnlineMeetingInfo.additionalData);
}
