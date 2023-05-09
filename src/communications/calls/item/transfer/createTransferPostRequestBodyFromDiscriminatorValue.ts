import {deserializeIntoTransferPostRequestBody} from './deserializeIntoTransferPostRequestBody';
import {TransferPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTransferPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTransferPostRequestBody;
}
