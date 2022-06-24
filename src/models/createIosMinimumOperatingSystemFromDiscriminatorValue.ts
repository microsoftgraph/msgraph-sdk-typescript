import {IosMinimumOperatingSystemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosMinimumOperatingSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosMinimumOperatingSystemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosMinimumOperatingSystemImpl();
}
