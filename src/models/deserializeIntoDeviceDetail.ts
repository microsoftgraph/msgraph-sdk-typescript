import {DeviceDetail} from './deviceDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceDetail(deviceDetail: DeviceDetail | undefined = {} as DeviceDetail) : Record<string, (node: ParseNode) => void> {
    return {
        "browser": n => { deviceDetail.browser = n.getStringValue(); },
        "deviceId": n => { deviceDetail.deviceId = n.getStringValue(); },
        "displayName": n => { deviceDetail.displayName = n.getStringValue(); },
        "isCompliant": n => { deviceDetail.isCompliant = n.getBooleanValue(); },
        "isManaged": n => { deviceDetail.isManaged = n.getBooleanValue(); },
        "@odata.type": n => { deviceDetail.odataType = n.getStringValue(); },
        "operatingSystem": n => { deviceDetail.operatingSystem = n.getStringValue(); },
        "trustType": n => { deviceDetail.trustType = n.getStringValue(); },
    }
}
