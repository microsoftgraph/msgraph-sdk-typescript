import type {ActivityBasedTimeoutPolicy} from './activityBasedTimeoutPolicy';
import type {ActivityBasedTimeoutPolicyCollectionResponse} from './activityBasedTimeoutPolicyCollectionResponse';
import {serializeActivityBasedTimeoutPolicy} from './serializeActivityBasedTimeoutPolicy';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeActivityBasedTimeoutPolicyCollectionResponse(writer: SerializationWriter, activityBasedTimeoutPolicyCollectionResponse: ActivityBasedTimeoutPolicyCollectionResponse | undefined = {} as ActivityBasedTimeoutPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, activityBasedTimeoutPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<ActivityBasedTimeoutPolicy>("value", activityBasedTimeoutPolicyCollectionResponse.value, serializeActivityBasedTimeoutPolicy);
}
