import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type DeviceCategory } from './deviceCategory';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCategory(deviceCategory: DeviceCategory | undefined = {} as DeviceCategory) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceCategory),
        "description": n => { deviceCategory.description = n.getStringValue(); },
        "displayName": n => { deviceCategory.displayName = n.getStringValue(); },
    }
}
