import {ExactPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExactPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExactPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExactPostRequestBody();
}
