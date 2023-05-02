import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceCategory} from './deviceCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCategory(deviceCategory: DeviceCategory | undefined = {} as DeviceCategory) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceCategory),
        "description": n => { deviceCategory.description = n.getStringValue(); },
        "displayName": n => { deviceCategory.displayName = n.getStringValue(); },
    }
}
