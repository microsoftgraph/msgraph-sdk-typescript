import {DeviceCompliancePolicyStateCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicyStateCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCompliancePolicyStateCollectionResponseImpl();
}
