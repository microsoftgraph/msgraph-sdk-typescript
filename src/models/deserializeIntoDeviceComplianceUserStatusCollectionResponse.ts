import {createDeviceComplianceUserStatusFromDiscriminatorValue} from './createDeviceComplianceUserStatusFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceComplianceUserStatus} from './deviceComplianceUserStatus';
import {DeviceComplianceUserStatusCollectionResponse} from './deviceComplianceUserStatusCollectionResponse';
import {serializeDeviceComplianceUserStatus} from './serializeDeviceComplianceUserStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceUserStatusCollectionResponse(deviceComplianceUserStatusCollectionResponse: DeviceComplianceUserStatusCollectionResponse | undefined = {} as DeviceComplianceUserStatusCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceComplianceUserStatusCollectionResponse),
        "value": n => { deviceComplianceUserStatusCollectionResponse.value = n.getCollectionOfObjectValues<DeviceComplianceUserStatus>(createDeviceComplianceUserStatusFromDiscriminatorValue); },
    }
}
