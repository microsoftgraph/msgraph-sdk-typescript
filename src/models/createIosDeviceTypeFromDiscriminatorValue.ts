import { deserializeIntoIosDeviceType } from './deserializeIntoIosDeviceType';
import { type IosDeviceType } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosDeviceTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosDeviceType;
}
