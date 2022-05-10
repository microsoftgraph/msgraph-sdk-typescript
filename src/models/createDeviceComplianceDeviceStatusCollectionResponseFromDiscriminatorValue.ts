import {DeviceComplianceDeviceStatusCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceDeviceStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceDeviceStatusCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceDeviceStatusCollectionResponseImpl();
}
