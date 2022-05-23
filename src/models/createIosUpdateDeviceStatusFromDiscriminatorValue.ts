import {IosUpdateDeviceStatusImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosUpdateDeviceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosUpdateDeviceStatusImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosUpdateDeviceStatusImpl();
}
