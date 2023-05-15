import {deserializeIntoCoupNumPostRequestBody} from './deserializeIntoCoupNumPostRequestBody';
import {CoupNumPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCoupNumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCoupNumPostRequestBody;
}
