import {ImSinPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImSinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImSinPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImSinPostRequestBody();
}
