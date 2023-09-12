import { deserializeIntoDec2BinPostRequestBody } from './deserializeIntoDec2BinPostRequestBody';
import { type Dec2BinPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDec2BinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDec2BinPostRequestBody;
}
