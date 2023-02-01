import {GcdPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGcdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GcdPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GcdPostRequestBody();
}
