import {WindowsDefenderScanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDefenderScanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsDefenderScanPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsDefenderScanPostRequestBody();
}
