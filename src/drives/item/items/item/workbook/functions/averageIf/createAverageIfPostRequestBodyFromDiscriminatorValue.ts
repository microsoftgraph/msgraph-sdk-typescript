import {AverageIfPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAverageIfPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AverageIfPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AverageIfPostRequestBody();
}
