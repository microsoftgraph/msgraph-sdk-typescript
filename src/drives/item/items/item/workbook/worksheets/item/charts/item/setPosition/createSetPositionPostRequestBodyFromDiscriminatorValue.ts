import {SetPositionPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetPositionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetPositionPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetPositionPostRequestBody();
}
