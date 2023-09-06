import { deserializeIntoDeviceComplianceSettingStateCollectionResponse } from './deserializeIntoDeviceComplianceSettingStateCollectionResponse';
import { type DeviceComplianceSettingStateCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceComplianceSettingStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceSettingStateCollectionResponse;
}
