import { deserializeIntoWindowsAppX } from './deserializeIntoWindowsAppX';
import { type WindowsAppX } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsAppXFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsAppX;
}
