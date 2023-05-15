import {deserializeIntoColumnsPostRequestBody} from './deserializeIntoColumnsPostRequestBody';
import {ColumnsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoColumnsPostRequestBody;
}
