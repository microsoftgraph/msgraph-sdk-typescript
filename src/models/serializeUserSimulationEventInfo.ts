import {UserSimulationEventInfo} from './userSimulationEventInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSimulationEventInfo(writer: SerializationWriter, userSimulationEventInfo: UserSimulationEventInfo | undefined = {} as UserSimulationEventInfo) : void {
        writer.writeStringValue("browser", userSimulationEventInfo.browser);
        writer.writeDateValue("eventDateTime", userSimulationEventInfo.eventDateTime);
        writer.writeStringValue("eventName", userSimulationEventInfo.eventName);
        writer.writeStringValue("ipAddress", userSimulationEventInfo.ipAddress);
        writer.writeStringValue("@odata.type", userSimulationEventInfo.odataType);
        writer.writeStringValue("osPlatformDeviceDetails", userSimulationEventInfo.osPlatformDeviceDetails);
        writer.writeAdditionalData(userSimulationEventInfo.additionalData);
}
