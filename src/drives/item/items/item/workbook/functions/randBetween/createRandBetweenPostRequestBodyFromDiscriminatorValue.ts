import {RandBetweenPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRandBetweenPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RandBetweenPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RandBetweenPostRequestBody();
}
