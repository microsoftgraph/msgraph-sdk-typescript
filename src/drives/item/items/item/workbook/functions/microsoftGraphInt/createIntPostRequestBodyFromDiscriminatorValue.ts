import {IntPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IntPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IntPostRequestBody();
}
