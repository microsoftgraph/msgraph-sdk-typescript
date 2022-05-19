import {ForceDeletePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createForceDeletePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ForceDeletePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ForceDeletePostRequestBody();
}
