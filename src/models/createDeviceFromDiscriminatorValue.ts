import {deserializeIntoDevice} from './deserializeIntoDevice';
import {Device} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDevice;
}
