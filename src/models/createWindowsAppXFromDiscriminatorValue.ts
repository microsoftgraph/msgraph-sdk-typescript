import {deserializeIntoWindowsAppX} from './deserializeIntoWindowsAppX';
import {WindowsAppX} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsAppXFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsAppX;
}
