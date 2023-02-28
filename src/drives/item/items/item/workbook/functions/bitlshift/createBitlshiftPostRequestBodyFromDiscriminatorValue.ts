import {BitlshiftPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitlshiftPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BitlshiftPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BitlshiftPostRequestBody();
}
