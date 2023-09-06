import { type ActivityBasedTimeoutPolicy } from './activityBasedTimeoutPolicy';
import { type ActivityBasedTimeoutPolicyCollectionResponse } from './activityBasedTimeoutPolicyCollectionResponse';
import { createActivityBasedTimeoutPolicyFromDiscriminatorValue } from './createActivityBasedTimeoutPolicyFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeActivityBasedTimeoutPolicy } from './serializeActivityBasedTimeoutPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoActivityBasedTimeoutPolicyCollectionResponse(activityBasedTimeoutPolicyCollectionResponse: ActivityBasedTimeoutPolicyCollectionResponse | undefined = {} as ActivityBasedTimeoutPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(activityBasedTimeoutPolicyCollectionResponse),
        "value": n => { activityBasedTimeoutPolicyCollectionResponse.value = n.getCollectionOfObjectValues<ActivityBasedTimeoutPolicy>(createActivityBasedTimeoutPolicyFromDiscriminatorValue); },
    }
}
