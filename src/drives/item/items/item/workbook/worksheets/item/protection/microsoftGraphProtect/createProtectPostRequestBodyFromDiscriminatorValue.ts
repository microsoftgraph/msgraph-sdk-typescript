import {ProtectPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProtectPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProtectPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProtectPostRequestBody();
}
