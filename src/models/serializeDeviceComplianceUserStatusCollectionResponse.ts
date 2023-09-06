import { type DeviceComplianceUserStatus } from './deviceComplianceUserStatus';
import { type DeviceComplianceUserStatusCollectionResponse } from './deviceComplianceUserStatusCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceComplianceUserStatus } from './serializeDeviceComplianceUserStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceUserStatusCollectionResponse(writer: SerializationWriter, deviceComplianceUserStatusCollectionResponse: DeviceComplianceUserStatusCollectionResponse | undefined = {} as DeviceComplianceUserStatusCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceUserStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceComplianceUserStatus>("value", deviceComplianceUserStatusCollectionResponse.value, serializeDeviceComplianceUserStatus);
}
