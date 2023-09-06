import { deserializeIntoOct2BinPostRequestBody } from './deserializeIntoOct2BinPostRequestBody';
import { type Oct2BinPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOct2BinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOct2BinPostRequestBody;
}
