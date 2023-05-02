import {deserializeIntoRowsPostRequestBody} from './deserializeIntoRowsPostRequestBody';
import {RowsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRowsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRowsPostRequestBody;
}
