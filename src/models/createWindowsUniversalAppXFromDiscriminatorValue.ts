import {WindowsUniversalAppX} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUniversalAppXFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsUniversalAppX {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsUniversalAppX();
}
