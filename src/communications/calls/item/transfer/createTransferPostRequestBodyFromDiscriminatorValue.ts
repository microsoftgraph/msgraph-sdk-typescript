import { deserializeIntoTransferPostRequestBody } from './deserializeIntoTransferPostRequestBody';
import { type TransferPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTransferPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTransferPostRequestBody;
}
