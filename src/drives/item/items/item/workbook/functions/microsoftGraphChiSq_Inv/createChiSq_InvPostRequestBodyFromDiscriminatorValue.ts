import {ChiSq_InvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChiSq_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChiSq_InvPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChiSq_InvPostRequestBody();
}
