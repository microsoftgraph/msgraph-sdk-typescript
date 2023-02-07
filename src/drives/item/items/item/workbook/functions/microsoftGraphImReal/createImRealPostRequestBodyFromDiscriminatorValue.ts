import {ImRealPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImRealPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImRealPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImRealPostRequestBody();
}
