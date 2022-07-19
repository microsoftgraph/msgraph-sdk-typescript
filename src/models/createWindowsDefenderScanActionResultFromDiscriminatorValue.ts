import {WindowsDefenderScanActionResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDefenderScanActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsDefenderScanActionResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsDefenderScanActionResult();
}
