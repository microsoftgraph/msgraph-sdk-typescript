import {MacOSMinimumOperatingSystem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSMinimumOperatingSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSMinimumOperatingSystem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSMinimumOperatingSystem();
}
