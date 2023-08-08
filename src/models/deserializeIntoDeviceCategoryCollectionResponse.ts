import {createDeviceCategoryFromDiscriminatorValue} from './createDeviceCategoryFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {DeviceCategory} from './deviceCategory';
import type {DeviceCategoryCollectionResponse} from './deviceCategoryCollectionResponse';
import {serializeDeviceCategory} from './serializeDeviceCategory';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCategoryCollectionResponse(deviceCategoryCollectionResponse: DeviceCategoryCollectionResponse | undefined = {} as DeviceCategoryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceCategoryCollectionResponse),
        "value": n => { deviceCategoryCollectionResponse.value = n.getCollectionOfObjectValues<DeviceCategory>(createDeviceCategoryFromDiscriminatorValue); },
    }
}
