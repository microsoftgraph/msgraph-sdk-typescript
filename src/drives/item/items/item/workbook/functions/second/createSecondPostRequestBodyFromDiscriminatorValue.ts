import {SecondPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecondPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecondPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecondPostRequestBody();
}
