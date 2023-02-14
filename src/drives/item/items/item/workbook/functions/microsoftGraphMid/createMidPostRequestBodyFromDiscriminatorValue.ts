import {MidPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMidPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MidPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MidPostRequestBody();
}
