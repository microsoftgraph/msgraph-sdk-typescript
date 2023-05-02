import {DeviceCategory} from './deviceCategory';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCategory(writer: SerializationWriter, deviceCategory: DeviceCategory | undefined = {} as DeviceCategory) : void {
        serializeEntity(writer, deviceCategory)
        writer.writeStringValue("description", deviceCategory.description);
        writer.writeStringValue("displayName", deviceCategory.displayName);
}
