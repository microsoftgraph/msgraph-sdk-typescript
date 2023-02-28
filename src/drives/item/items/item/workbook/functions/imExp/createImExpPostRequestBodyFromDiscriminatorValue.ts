import {ImExpPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImExpPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImExpPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImExpPostRequestBody();
}
