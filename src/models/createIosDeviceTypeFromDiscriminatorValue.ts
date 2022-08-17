import {IosDeviceType} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosDeviceTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosDeviceType {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosDeviceType();
}
