import { deserializeIntoUpdateAllowedCombinationsPostRequestBody } from './deserializeIntoUpdateAllowedCombinationsPostRequestBody';
import { type UpdateAllowedCombinationsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUpdateAllowedCombinationsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUpdateAllowedCombinationsPostRequestBody;
}
