import {SumIfPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSumIfPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SumIfPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SumIfPostRequestBody();
}
