import {Hex2BinPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHex2BinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Hex2BinPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Hex2BinPostRequestBody();
}
