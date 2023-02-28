import {EvenPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEvenPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : EvenPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EvenPostRequestBody();
}
