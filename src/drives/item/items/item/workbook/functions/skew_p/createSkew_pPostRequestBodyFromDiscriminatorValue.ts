import {deserializeIntoSkew_pPostRequestBody} from './deserializeIntoSkew_pPostRequestBody';
import {Skew_pPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSkew_pPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSkew_pPostRequestBody;
}
