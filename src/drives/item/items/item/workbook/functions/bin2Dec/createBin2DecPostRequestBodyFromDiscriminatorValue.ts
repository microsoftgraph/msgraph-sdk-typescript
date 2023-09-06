import { deserializeIntoBin2DecPostRequestBody } from './deserializeIntoBin2DecPostRequestBody';
import { type Bin2DecPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBin2DecPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBin2DecPostRequestBody;
}
