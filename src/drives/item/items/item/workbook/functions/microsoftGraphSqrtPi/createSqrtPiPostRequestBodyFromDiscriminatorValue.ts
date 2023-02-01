import {SqrtPiPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSqrtPiPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SqrtPiPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SqrtPiPostRequestBody();
}
