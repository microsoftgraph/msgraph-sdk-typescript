import { deserializeIntoRunHuntingQueryPostRequestBody } from './deserializeIntoRunHuntingQueryPostRequestBody';
import { type RunHuntingQueryPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRunHuntingQueryPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRunHuntingQueryPostRequestBody;
}
