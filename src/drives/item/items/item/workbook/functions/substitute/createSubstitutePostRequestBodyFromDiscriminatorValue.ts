import { deserializeIntoSubstitutePostRequestBody } from './deserializeIntoSubstitutePostRequestBody';
import { type SubstitutePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubstitutePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubstitutePostRequestBody;
}
