import {deserializeIntoSubstitutePostRequestBody} from './deserializeIntoSubstitutePostRequestBody';
import {SubstitutePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubstitutePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubstitutePostRequestBody;
}
