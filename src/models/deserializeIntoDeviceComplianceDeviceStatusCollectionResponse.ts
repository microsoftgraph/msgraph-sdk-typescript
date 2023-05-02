import {createDeviceComplianceDeviceStatusFromDiscriminatorValue} from './createDeviceComplianceDeviceStatusFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceComplianceDeviceStatus} from './deviceComplianceDeviceStatus';
import {DeviceComplianceDeviceStatusCollectionResponse} from './deviceComplianceDeviceStatusCollectionResponse';
import {serializeDeviceComplianceDeviceStatus} from './serializeDeviceComplianceDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceDeviceStatusCollectionResponse(deviceComplianceDeviceStatusCollectionResponse: DeviceComplianceDeviceStatusCollectionResponse | undefined = {} as DeviceComplianceDeviceStatusCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceComplianceDeviceStatusCollectionResponse),
        "value": n => { deviceComplianceDeviceStatusCollectionResponse.value = n.getCollectionOfObjectValues<DeviceComplianceDeviceStatus>(createDeviceComplianceDeviceStatusFromDiscriminatorValue); },
    }
}
