import {deserializeIntoIosDeviceType} from './deserializeIntoIosDeviceType';
import {IosDeviceType} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosDeviceTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosDeviceType;
}
