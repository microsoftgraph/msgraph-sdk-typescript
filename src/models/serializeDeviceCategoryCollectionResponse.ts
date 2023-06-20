import {DeviceCategory} from './deviceCategory';
import {DeviceCategoryCollectionResponse} from './deviceCategoryCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceCategory} from './serializeDeviceCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCategoryCollectionResponse(deviceCategoryCollectionResponse: DeviceCategoryCollectionResponse | undefined = {} as DeviceCategoryCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCategoryCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceCategory>("value", deviceCategoryCollectionResponse.value, serializeDeviceCategory);
}
