import {deserializeIntoDollarFrPostRequestBody} from './deserializeIntoDollarFrPostRequestBody';
import {DollarFrPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDollarFrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDollarFrPostRequestBody;
}
