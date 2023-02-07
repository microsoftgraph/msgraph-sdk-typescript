import {AcceptPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAcceptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AcceptPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AcceptPostRequestBody();
}
