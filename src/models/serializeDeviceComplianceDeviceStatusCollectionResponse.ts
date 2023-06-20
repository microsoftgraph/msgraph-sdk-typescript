import {DeviceComplianceDeviceStatus} from './deviceComplianceDeviceStatus';
import {DeviceComplianceDeviceStatusCollectionResponse} from './deviceComplianceDeviceStatusCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceComplianceDeviceStatus} from './serializeDeviceComplianceDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceDeviceStatusCollectionResponse(deviceComplianceDeviceStatusCollectionResponse: DeviceComplianceDeviceStatusCollectionResponse | undefined = {} as DeviceComplianceDeviceStatusCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceDeviceStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceComplianceDeviceStatus>("value", deviceComplianceDeviceStatusCollectionResponse.value, serializeDeviceComplianceDeviceStatus);
}
