import {CreateForwardPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateForwardPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateForwardPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateForwardPostRequestBody();
}
