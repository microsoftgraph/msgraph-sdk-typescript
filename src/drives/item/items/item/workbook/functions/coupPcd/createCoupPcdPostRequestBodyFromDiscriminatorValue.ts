import {deserializeIntoCoupPcdPostRequestBody} from './deserializeIntoCoupPcdPostRequestBody';
import {CoupPcdPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCoupPcdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCoupPcdPostRequestBody;
}
