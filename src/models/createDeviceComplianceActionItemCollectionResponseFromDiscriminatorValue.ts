import { deserializeIntoDeviceComplianceActionItemCollectionResponse } from './deserializeIntoDeviceComplianceActionItemCollectionResponse';
import { type DeviceComplianceActionItemCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceComplianceActionItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceActionItemCollectionResponse;
}
