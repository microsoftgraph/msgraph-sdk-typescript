import {Hex2DecPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHex2DecPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Hex2DecPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Hex2DecPostRequestBody();
}
