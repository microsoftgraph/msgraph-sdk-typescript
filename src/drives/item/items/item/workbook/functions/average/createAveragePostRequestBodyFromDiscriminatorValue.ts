import {AveragePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAveragePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AveragePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AveragePostRequestBody();
}
