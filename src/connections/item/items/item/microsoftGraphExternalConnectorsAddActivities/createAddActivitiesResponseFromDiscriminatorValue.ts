import {deserializeIntoAddActivitiesResponse} from './deserializeIntoAddActivitiesResponse';
import {AddActivitiesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddActivitiesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddActivitiesResponse;
}
