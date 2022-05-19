import {SetOrderPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetOrderPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetOrderPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetOrderPostRequestBody();
}
