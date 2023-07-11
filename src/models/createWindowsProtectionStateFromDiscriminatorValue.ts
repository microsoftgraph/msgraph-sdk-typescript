import {deserializeIntoWindowsProtectionState} from './deserializeIntoWindowsProtectionState';
import {WindowsProtectionState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsProtectionStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsProtectionState;
}
