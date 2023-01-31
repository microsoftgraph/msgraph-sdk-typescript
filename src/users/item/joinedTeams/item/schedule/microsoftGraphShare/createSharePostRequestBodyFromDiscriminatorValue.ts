import {SharePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharePostRequestBody();
}
