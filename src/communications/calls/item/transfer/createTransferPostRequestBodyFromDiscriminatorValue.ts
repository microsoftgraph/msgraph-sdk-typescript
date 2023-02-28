import {TransferPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTransferPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TransferPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TransferPostRequestBody();
}
