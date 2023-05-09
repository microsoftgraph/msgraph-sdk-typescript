import {deserializeIntoHex2BinPostRequestBody} from './deserializeIntoHex2BinPostRequestBody';
import {Hex2BinPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHex2BinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHex2BinPostRequestBody;
}
