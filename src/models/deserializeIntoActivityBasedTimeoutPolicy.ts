import {ActivityBasedTimeoutPolicy} from './activityBasedTimeoutPolicy';
import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoActivityBasedTimeoutPolicy(activityBasedTimeoutPolicy: ActivityBasedTimeoutPolicy | undefined = {} as ActivityBasedTimeoutPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(activityBasedTimeoutPolicy),
    }
}
