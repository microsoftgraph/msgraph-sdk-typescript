import {PdurationPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPdurationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PdurationPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PdurationPostRequestBody();
}
