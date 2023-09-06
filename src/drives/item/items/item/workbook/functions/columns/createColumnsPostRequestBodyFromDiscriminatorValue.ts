import { deserializeIntoColumnsPostRequestBody } from './deserializeIntoColumnsPostRequestBody';
import { type ColumnsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createColumnsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoColumnsPostRequestBody;
}
