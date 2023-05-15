import {deserializeIntoLocateDeviceActionResult} from './deserializeIntoLocateDeviceActionResult';
import {LocateDeviceActionResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocateDeviceActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLocateDeviceActionResult;
}
