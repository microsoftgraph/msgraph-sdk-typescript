import { type ActivityBasedTimeoutPolicy } from './activityBasedTimeoutPolicy';
import { deserializeIntoStsPolicy } from './deserializeIntoStsPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoActivityBasedTimeoutPolicy(activityBasedTimeoutPolicy: ActivityBasedTimeoutPolicy | undefined = {} as ActivityBasedTimeoutPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(activityBasedTimeoutPolicy),
    }
}
