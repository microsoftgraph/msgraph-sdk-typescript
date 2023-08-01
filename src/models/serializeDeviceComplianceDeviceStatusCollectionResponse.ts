import type {DeviceComplianceDeviceStatus} from './deviceComplianceDeviceStatus';
import type {DeviceComplianceDeviceStatusCollectionResponse} from './deviceComplianceDeviceStatusCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceComplianceDeviceStatus} from './serializeDeviceComplianceDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceDeviceStatusCollectionResponse(writer: SerializationWriter, deviceComplianceDeviceStatusCollectionResponse: DeviceComplianceDeviceStatusCollectionResponse | undefined = {} as DeviceComplianceDeviceStatusCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceDeviceStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceComplianceDeviceStatus>("value", deviceComplianceDeviceStatusCollectionResponse.value, serializeDeviceComplianceDeviceStatus);
}
