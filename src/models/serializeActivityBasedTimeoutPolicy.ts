import {ActivityBasedTimeoutPolicy} from './activityBasedTimeoutPolicy';
import {serializeStsPolicy} from './serializeStsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeActivityBasedTimeoutPolicy(writer: SerializationWriter, activityBasedTimeoutPolicy: ActivityBasedTimeoutPolicy | undefined = {} as ActivityBasedTimeoutPolicy) : void {
        serializeStsPolicy(writer, activityBasedTimeoutPolicy)
}
