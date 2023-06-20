import {ActivityBasedTimeoutPolicy} from './activityBasedTimeoutPolicy';
import {serializeStsPolicy} from './serializeStsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeActivityBasedTimeoutPolicy(activityBasedTimeoutPolicy: ActivityBasedTimeoutPolicy | undefined = {} as ActivityBasedTimeoutPolicy, writer: SerializationWriter) : void {
        serializeStsPolicy(writer, activityBasedTimeoutPolicy)
}
