import {deserializeIntoDeviceCompliancePolicyCollectionResponse} from './deserializeIntoDeviceCompliancePolicyCollectionResponse';
import {DeviceCompliancePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCompliancePolicyCollectionResponse;
}
