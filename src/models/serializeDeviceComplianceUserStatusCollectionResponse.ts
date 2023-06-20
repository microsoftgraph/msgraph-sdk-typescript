import {DeviceComplianceUserStatus} from './deviceComplianceUserStatus';
import {DeviceComplianceUserStatusCollectionResponse} from './deviceComplianceUserStatusCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceComplianceUserStatus} from './serializeDeviceComplianceUserStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceUserStatusCollectionResponse(deviceComplianceUserStatusCollectionResponse: DeviceComplianceUserStatusCollectionResponse | undefined = {} as DeviceComplianceUserStatusCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceUserStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceComplianceUserStatus>("value", deviceComplianceUserStatusCollectionResponse.value, serializeDeviceComplianceUserStatus);
}
