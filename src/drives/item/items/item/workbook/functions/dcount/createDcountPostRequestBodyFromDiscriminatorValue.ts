import {deserializeIntoDcountPostRequestBody} from './deserializeIntoDcountPostRequestBody';
import {DcountPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDcountPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDcountPostRequestBody;
}
