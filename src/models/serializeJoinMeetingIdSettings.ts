import {JoinMeetingIdSettings} from './joinMeetingIdSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeJoinMeetingIdSettings(writer: SerializationWriter, joinMeetingIdSettings: JoinMeetingIdSettings | undefined = {} as JoinMeetingIdSettings) : void {
        writer.writeBooleanValue("isPasscodeRequired", joinMeetingIdSettings.isPasscodeRequired);
        writer.writeStringValue("joinMeetingId", joinMeetingIdSettings.joinMeetingId);
        writer.writeStringValue("@odata.type", joinMeetingIdSettings.odataType);
        writer.writeStringValue("passcode", joinMeetingIdSettings.passcode);
        writer.writeAdditionalData(joinMeetingIdSettings.additionalData);
}
