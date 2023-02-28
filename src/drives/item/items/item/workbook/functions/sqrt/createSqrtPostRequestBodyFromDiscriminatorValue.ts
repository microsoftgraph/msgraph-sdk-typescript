import {SqrtPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSqrtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SqrtPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SqrtPostRequestBody();
}
