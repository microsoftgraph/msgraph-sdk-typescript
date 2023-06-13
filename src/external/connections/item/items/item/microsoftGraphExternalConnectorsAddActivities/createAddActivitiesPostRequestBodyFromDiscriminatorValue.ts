import {deserializeIntoAddActivitiesPostRequestBody} from './deserializeIntoAddActivitiesPostRequestBody';
import {AddActivitiesPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddActivitiesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddActivitiesPostRequestBody;
}
