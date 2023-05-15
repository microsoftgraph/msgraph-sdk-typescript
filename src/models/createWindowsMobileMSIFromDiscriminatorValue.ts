import {deserializeIntoWindowsMobileMSI} from './deserializeIntoWindowsMobileMSI';
import {WindowsMobileMSI} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsMobileMSIFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsMobileMSI;
}
