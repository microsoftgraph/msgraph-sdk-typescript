import {deserializeIntoBitxorPostRequestBody} from './deserializeIntoBitxorPostRequestBody';
import {BitxorPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitxorPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBitxorPostRequestBody;
}
