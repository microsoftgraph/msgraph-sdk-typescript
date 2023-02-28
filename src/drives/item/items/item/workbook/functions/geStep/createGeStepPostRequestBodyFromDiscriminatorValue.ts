import {GeStepPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGeStepPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GeStepPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GeStepPostRequestBody();
}
