import { type DeviceCategory } from './deviceCategory';
import { type DeviceCategoryCollectionResponse } from './deviceCategoryCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceCategory } from './serializeDeviceCategory';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceCategoryCollectionResponse(writer: SerializationWriter, deviceCategoryCollectionResponse: DeviceCategoryCollectionResponse | undefined = {} as DeviceCategoryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCategoryCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceCategory>("value", deviceCategoryCollectionResponse.value, serializeDeviceCategory);
}
