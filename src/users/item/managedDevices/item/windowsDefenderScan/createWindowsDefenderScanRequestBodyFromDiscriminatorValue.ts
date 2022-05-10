import {WindowsDefenderScanRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDefenderScanRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsDefenderScanRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsDefenderScanRequestBodyImpl();
}
