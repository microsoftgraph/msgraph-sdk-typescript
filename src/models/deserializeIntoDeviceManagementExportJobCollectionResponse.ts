import {createDeviceManagementExportJobFromDiscriminatorValue} from './createDeviceManagementExportJobFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {DeviceManagementExportJob} from './deviceManagementExportJob';
import type {DeviceManagementExportJobCollectionResponse} from './deviceManagementExportJobCollectionResponse';
import {serializeDeviceManagementExportJob} from './serializeDeviceManagementExportJob';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementExportJobCollectionResponse(deviceManagementExportJobCollectionResponse: DeviceManagementExportJobCollectionResponse | undefined = {} as DeviceManagementExportJobCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceManagementExportJobCollectionResponse),
        "value": n => { deviceManagementExportJobCollectionResponse.value = n.getCollectionOfObjectValues<DeviceManagementExportJob>(createDeviceManagementExportJobFromDiscriminatorValue); },
    }
}
