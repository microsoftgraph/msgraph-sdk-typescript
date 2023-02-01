import {RatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RatePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RatePostRequestBody();
}
