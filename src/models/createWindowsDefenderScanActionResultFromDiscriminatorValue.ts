import { deserializeIntoWindowsDefenderScanActionResult } from './deserializeIntoWindowsDefenderScanActionResult';
import { type WindowsDefenderScanActionResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsDefenderScanActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsDefenderScanActionResult;
}
