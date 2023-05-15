import {deserializeIntoPdurationPostRequestBody} from './deserializeIntoPdurationPostRequestBody';
import {PdurationPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPdurationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPdurationPostRequestBody;
}
