import {IntRatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntRatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IntRatePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IntRatePostRequestBody();
}
