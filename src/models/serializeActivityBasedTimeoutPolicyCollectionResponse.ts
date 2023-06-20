import {ActivityBasedTimeoutPolicy} from './activityBasedTimeoutPolicy';
import {ActivityBasedTimeoutPolicyCollectionResponse} from './activityBasedTimeoutPolicyCollectionResponse';
import {serializeActivityBasedTimeoutPolicy} from './serializeActivityBasedTimeoutPolicy';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeActivityBasedTimeoutPolicyCollectionResponse(activityBasedTimeoutPolicyCollectionResponse: ActivityBasedTimeoutPolicyCollectionResponse | undefined = {} as ActivityBasedTimeoutPolicyCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, activityBasedTimeoutPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<ActivityBasedTimeoutPolicy>("value", activityBasedTimeoutPolicyCollectionResponse.value, serializeActivityBasedTimeoutPolicy);
}
