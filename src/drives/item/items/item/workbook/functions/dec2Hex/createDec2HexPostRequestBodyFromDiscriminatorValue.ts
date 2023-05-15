import {deserializeIntoDec2HexPostRequestBody} from './deserializeIntoDec2HexPostRequestBody';
import {Dec2HexPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDec2HexPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDec2HexPostRequestBody;
}
