import {createTeamworkUserIdentityFromDiscriminatorValue} from './createTeamworkUserIdentityFromDiscriminatorValue';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import {TeamworkOnlineMeetingInfo} from './teamworkOnlineMeetingInfo';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkOnlineMeetingInfo(teamworkOnlineMeetingInfo: TeamworkOnlineMeetingInfo | undefined = {} as TeamworkOnlineMeetingInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "calendarEventId": n => { teamworkOnlineMeetingInfo.calendarEventId = n.getStringValue(); },
        "joinWebUrl": n => { teamworkOnlineMeetingInfo.joinWebUrl = n.getStringValue(); },
        "@odata.type": n => { teamworkOnlineMeetingInfo.odataType = n.getStringValue(); },
        "organizer": n => { teamworkOnlineMeetingInfo.organizer = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
    }
}
