import {AverageAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAverageAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AverageAPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AverageAPostRequestBody();
}
