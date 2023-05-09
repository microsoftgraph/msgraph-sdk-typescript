import {deserializeIntoAcothPostRequestBody} from './deserializeIntoAcothPostRequestBody';
import {AcothPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAcothPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAcothPostRequestBody;
}
