import { deserializeIntoWindowsMobileMSI } from './deserializeIntoWindowsMobileMSI';
import { type WindowsMobileMSI } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsMobileMSIFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsMobileMSI;
}
