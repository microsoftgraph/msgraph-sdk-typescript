import {ReptPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReptPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReptPostRequestBody();
}
