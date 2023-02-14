import {ReceivedPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReceivedPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReceivedPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReceivedPostRequestBody();
}
