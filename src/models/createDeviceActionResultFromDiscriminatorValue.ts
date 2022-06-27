import {DeviceActionResultImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceActionResultImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceActionResultImpl();
}
