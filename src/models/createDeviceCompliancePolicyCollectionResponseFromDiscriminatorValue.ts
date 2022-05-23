import {DeviceCompliancePolicyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCompliancePolicyCollectionResponseImpl();
}
