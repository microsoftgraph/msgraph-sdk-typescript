import {WindowsUniversalAppXImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUniversalAppXFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsUniversalAppXImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsUniversalAppXImpl();
}
