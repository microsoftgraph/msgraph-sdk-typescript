import {deserializeIntoWindowsUniversalAppX} from './deserializeIntoWindowsUniversalAppX';
import {WindowsUniversalAppX} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUniversalAppXFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsUniversalAppX;
}
