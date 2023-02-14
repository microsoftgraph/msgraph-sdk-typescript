import {MedianPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMedianPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MedianPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MedianPostRequestBody();
}
