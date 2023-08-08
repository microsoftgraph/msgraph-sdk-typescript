import type {OnlineMeetingInfo} from './onlineMeetingInfo';
import type {Phone} from './phone';
import {serializePhone} from './serializePhone';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnlineMeetingInfo(writer: SerializationWriter, onlineMeetingInfo: OnlineMeetingInfo | undefined = {} as OnlineMeetingInfo) : void {
        writer.writeStringValue("conferenceId", onlineMeetingInfo.conferenceId);
        writer.writeStringValue("joinUrl", onlineMeetingInfo.joinUrl);
        writer.writeStringValue("@odata.type", onlineMeetingInfo.odataType);
        writer.writeCollectionOfObjectValues<Phone>("phones", onlineMeetingInfo.phones, serializePhone);
        writer.writeStringValue("quickDial", onlineMeetingInfo.quickDial);
        writer.writeCollectionOfPrimitiveValues<string>("tollFreeNumbers", onlineMeetingInfo.tollFreeNumbers);
        writer.writeStringValue("tollNumber", onlineMeetingInfo.tollNumber);
        writer.writeAdditionalData(onlineMeetingInfo.additionalData);
}
