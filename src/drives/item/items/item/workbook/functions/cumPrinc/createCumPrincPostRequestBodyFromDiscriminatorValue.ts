import {deserializeIntoCumPrincPostRequestBody} from './deserializeIntoCumPrincPostRequestBody';
import {CumPrincPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCumPrincPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCumPrincPostRequestBody;
}
