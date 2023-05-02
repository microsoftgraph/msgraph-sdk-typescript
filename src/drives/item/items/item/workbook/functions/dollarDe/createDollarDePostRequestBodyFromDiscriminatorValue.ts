import {deserializeIntoDollarDePostRequestBody} from './deserializeIntoDollarDePostRequestBody';
import {DollarDePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDollarDePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDollarDePostRequestBody;
}
