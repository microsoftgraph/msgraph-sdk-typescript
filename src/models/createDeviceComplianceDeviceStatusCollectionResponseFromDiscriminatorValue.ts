import {deserializeIntoDeviceComplianceDeviceStatusCollectionResponse} from './deserializeIntoDeviceComplianceDeviceStatusCollectionResponse';
import {DeviceComplianceDeviceStatusCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceDeviceStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceDeviceStatusCollectionResponse;
}
