import {deserializeIntoCschPostRequestBody} from './deserializeIntoCschPostRequestBody';
import {CschPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCschPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCschPostRequestBody;
}
