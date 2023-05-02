import {deserializeIntoAcosPostRequestBody} from './deserializeIntoAcosPostRequestBody';
import {AcosPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAcosPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAcosPostRequestBody;
}
