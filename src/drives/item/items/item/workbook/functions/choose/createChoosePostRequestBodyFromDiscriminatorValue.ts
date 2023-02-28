import {ChoosePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChoosePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChoosePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChoosePostRequestBody();
}
