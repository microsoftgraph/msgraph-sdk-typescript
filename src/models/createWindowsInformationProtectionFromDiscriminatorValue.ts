import {WindowsInformationProtectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionImpl();
}
