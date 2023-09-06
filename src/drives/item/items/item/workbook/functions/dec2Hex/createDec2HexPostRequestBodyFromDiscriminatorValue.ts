import { deserializeIntoDec2HexPostRequestBody } from './deserializeIntoDec2HexPostRequestBody';
import { type Dec2HexPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDec2HexPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDec2HexPostRequestBody;
}
