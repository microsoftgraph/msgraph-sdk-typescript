import {deserializeIntoHex2DecPostRequestBody} from './deserializeIntoHex2DecPostRequestBody';
import {Hex2DecPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHex2DecPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHex2DecPostRequestBody;
}
