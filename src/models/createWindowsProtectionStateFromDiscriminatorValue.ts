import { deserializeIntoWindowsProtectionState } from './deserializeIntoWindowsProtectionState';
import { type WindowsProtectionState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsProtectionStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsProtectionState;
}
