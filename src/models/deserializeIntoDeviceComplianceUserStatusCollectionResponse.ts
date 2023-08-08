import {createDeviceComplianceUserStatusFromDiscriminatorValue} from './createDeviceComplianceUserStatusFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {DeviceComplianceUserStatus} from './deviceComplianceUserStatus';
import type {DeviceComplianceUserStatusCollectionResponse} from './deviceComplianceUserStatusCollectionResponse';
import {serializeDeviceComplianceUserStatus} from './serializeDeviceComplianceUserStatus';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceUserStatusCollectionResponse(deviceComplianceUserStatusCollectionResponse: DeviceComplianceUserStatusCollectionResponse | undefined = {} as DeviceComplianceUserStatusCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceComplianceUserStatusCollectionResponse),
        "value": n => { deviceComplianceUserStatusCollectionResponse.value = n.getCollectionOfObjectValues<DeviceComplianceUserStatus>(createDeviceComplianceUserStatusFromDiscriminatorValue); },
    }
}
