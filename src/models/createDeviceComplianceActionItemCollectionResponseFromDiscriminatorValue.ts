import {DeviceComplianceActionItemCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceActionItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceActionItemCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceActionItemCollectionResponseImpl();
}
