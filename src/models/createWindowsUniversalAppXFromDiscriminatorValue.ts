import { deserializeIntoWindowsUniversalAppX } from './deserializeIntoWindowsUniversalAppX';
import { type WindowsUniversalAppX } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsUniversalAppXFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsUniversalAppX;
}
