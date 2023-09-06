import { type ActivityBasedTimeoutPolicy } from './activityBasedTimeoutPolicy';
import { serializeStsPolicy } from './serializeStsPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeActivityBasedTimeoutPolicy(writer: SerializationWriter, activityBasedTimeoutPolicy: ActivityBasedTimeoutPolicy | undefined = {} as ActivityBasedTimeoutPolicy) : void {
        serializeStsPolicy(writer, activityBasedTimeoutPolicy)
}
