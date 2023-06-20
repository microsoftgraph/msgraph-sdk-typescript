import {DeviceCategory} from './deviceCategory';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCategory(deviceCategory: DeviceCategory | undefined = {} as DeviceCategory, writer: SerializationWriter) : void {
        serializeEntity(writer, deviceCategory)
        writer.writeStringValue("description", deviceCategory.description);
        writer.writeStringValue("displayName", deviceCategory.displayName);
}
