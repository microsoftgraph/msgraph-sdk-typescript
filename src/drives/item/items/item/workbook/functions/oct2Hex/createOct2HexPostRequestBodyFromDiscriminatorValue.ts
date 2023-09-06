import { deserializeIntoOct2HexPostRequestBody } from './deserializeIntoOct2HexPostRequestBody';
import { type Oct2HexPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOct2HexPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOct2HexPostRequestBody;
}
