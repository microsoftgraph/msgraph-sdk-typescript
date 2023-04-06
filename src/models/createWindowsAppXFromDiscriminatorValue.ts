import {WindowsAppX} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsAppXFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsAppX {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsAppX();
}
