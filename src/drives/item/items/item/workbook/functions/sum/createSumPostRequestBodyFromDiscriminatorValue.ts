import {SumPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SumPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SumPostRequestBody();
}
