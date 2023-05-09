import {createDeviceManagementExportJobFromDiscriminatorValue} from './createDeviceManagementExportJobFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceManagementExportJob} from './deviceManagementExportJob';
import {DeviceManagementExportJobCollectionResponse} from './deviceManagementExportJobCollectionResponse';
import {serializeDeviceManagementExportJob} from './serializeDeviceManagementExportJob';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementExportJobCollectionResponse(deviceManagementExportJobCollectionResponse: DeviceManagementExportJobCollectionResponse | undefined = {} as DeviceManagementExportJobCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceManagementExportJobCollectionResponse),
        "value": n => { deviceManagementExportJobCollectionResponse.value = n.getCollectionOfObjectValues<DeviceManagementExportJob>(createDeviceManagementExportJobFromDiscriminatorValue); },
    }
}
