import { deserializeIntoAddActivitiesPostRequestBody } from './deserializeIntoAddActivitiesPostRequestBody';
import { type AddActivitiesPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAddActivitiesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddActivitiesPostRequestBody;
}
