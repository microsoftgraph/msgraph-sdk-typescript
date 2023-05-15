import {deserializeIntoCscPostRequestBody} from './deserializeIntoCscPostRequestBody';
import {CscPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCscPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCscPostRequestBody;
}
