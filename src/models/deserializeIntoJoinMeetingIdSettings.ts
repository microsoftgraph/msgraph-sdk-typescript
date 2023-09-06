import { type JoinMeetingIdSettings } from './joinMeetingIdSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoJoinMeetingIdSettings(joinMeetingIdSettings: JoinMeetingIdSettings | undefined = {} as JoinMeetingIdSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "isPasscodeRequired": n => { joinMeetingIdSettings.isPasscodeRequired = n.getBooleanValue(); },
        "joinMeetingId": n => { joinMeetingIdSettings.joinMeetingId = n.getStringValue(); },
        "@odata.type": n => { joinMeetingIdSettings.odataType = n.getStringValue(); },
        "passcode": n => { joinMeetingIdSettings.passcode = n.getStringValue(); },
    }
}
