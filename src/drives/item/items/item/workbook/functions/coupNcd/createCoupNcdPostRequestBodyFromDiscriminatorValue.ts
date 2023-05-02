import {deserializeIntoCoupNcdPostRequestBody} from './deserializeIntoCoupNcdPostRequestBody';
import {CoupNcdPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCoupNcdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCoupNcdPostRequestBody;
}
