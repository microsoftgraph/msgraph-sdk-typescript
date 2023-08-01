import {createDeviceManagementExportJobFromDiscriminatorValue} from './createDeviceManagementExportJobFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {DeviceManagementExportJob} from './deviceManagementExportJob';
import type {DeviceManagementReports} from './deviceManagementReports';
import {serializeDeviceManagementExportJob} from './serializeDeviceManagementExportJob';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementReports(deviceManagementReports: DeviceManagementReports | undefined = {} as DeviceManagementReports) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceManagementReports),
        "exportJobs": n => { deviceManagementReports.exportJobs = n.getCollectionOfObjectValues<DeviceManagementExportJob>(createDeviceManagementExportJobFromDiscriminatorValue); },
    }
}
