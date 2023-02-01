import {BitxorPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitxorPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BitxorPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BitxorPostRequestBody();
}
