import { deserializeIntoOct2DecPostRequestBody } from './deserializeIntoOct2DecPostRequestBody';
import { type Oct2DecPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOct2DecPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOct2DecPostRequestBody;
}
