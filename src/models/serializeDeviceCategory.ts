import { type DeviceCategory } from './deviceCategory';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceCategory(writer: SerializationWriter, deviceCategory: DeviceCategory | undefined = {} as DeviceCategory) : void {
        serializeEntity(writer, deviceCategory)
        writer.writeStringValue("description", deviceCategory.description);
        writer.writeStringValue("displayName", deviceCategory.displayName);
}
