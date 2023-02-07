import {ImSumPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImSumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImSumPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImSumPostRequestBody();
}
