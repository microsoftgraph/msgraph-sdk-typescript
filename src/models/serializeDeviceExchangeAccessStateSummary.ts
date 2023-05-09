import {DeviceExchangeAccessStateSummary} from './deviceExchangeAccessStateSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceExchangeAccessStateSummary(writer: SerializationWriter, deviceExchangeAccessStateSummary: DeviceExchangeAccessStateSummary | undefined = {} as DeviceExchangeAccessStateSummary) : void {
        writer.writeNumberValue("allowedDeviceCount", deviceExchangeAccessStateSummary.allowedDeviceCount);
        writer.writeNumberValue("blockedDeviceCount", deviceExchangeAccessStateSummary.blockedDeviceCount);
        writer.writeStringValue("@odata.type", deviceExchangeAccessStateSummary.odataType);
        writer.writeNumberValue("quarantinedDeviceCount", deviceExchangeAccessStateSummary.quarantinedDeviceCount);
        writer.writeNumberValue("unavailableDeviceCount", deviceExchangeAccessStateSummary.unavailableDeviceCount);
        writer.writeNumberValue("unknownDeviceCount", deviceExchangeAccessStateSummary.unknownDeviceCount);
        writer.writeAdditionalData(deviceExchangeAccessStateSummary.additionalData);
}
