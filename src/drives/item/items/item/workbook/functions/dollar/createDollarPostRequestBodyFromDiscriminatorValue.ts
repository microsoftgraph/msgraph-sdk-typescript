import {deserializeIntoDollarPostRequestBody} from './deserializeIntoDollarPostRequestBody';
import {DollarPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDollarPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDollarPostRequestBody;
}
