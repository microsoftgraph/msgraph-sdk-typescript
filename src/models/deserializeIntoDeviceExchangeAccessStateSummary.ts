import {DeviceExchangeAccessStateSummary} from './deviceExchangeAccessStateSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceExchangeAccessStateSummary(deviceExchangeAccessStateSummary: DeviceExchangeAccessStateSummary | undefined = {} as DeviceExchangeAccessStateSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedDeviceCount": n => { deviceExchangeAccessStateSummary.allowedDeviceCount = n.getNumberValue(); },
        "blockedDeviceCount": n => { deviceExchangeAccessStateSummary.blockedDeviceCount = n.getNumberValue(); },
        "@odata.type": n => { deviceExchangeAccessStateSummary.odataType = n.getStringValue(); },
        "quarantinedDeviceCount": n => { deviceExchangeAccessStateSummary.quarantinedDeviceCount = n.getNumberValue(); },
        "unavailableDeviceCount": n => { deviceExchangeAccessStateSummary.unavailableDeviceCount = n.getNumberValue(); },
        "unknownDeviceCount": n => { deviceExchangeAccessStateSummary.unknownDeviceCount = n.getNumberValue(); },
    }
}
