import { deserializeIntoDeviceComplianceDeviceStatusCollectionResponse } from './deserializeIntoDeviceComplianceDeviceStatusCollectionResponse';
import { type DeviceComplianceDeviceStatusCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceComplianceDeviceStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceDeviceStatusCollectionResponse;
}
