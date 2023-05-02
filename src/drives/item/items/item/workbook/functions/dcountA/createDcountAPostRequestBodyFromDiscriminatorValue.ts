import {deserializeIntoDcountAPostRequestBody} from './deserializeIntoDcountAPostRequestBody';
import {DcountAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDcountAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDcountAPostRequestBody;
}
