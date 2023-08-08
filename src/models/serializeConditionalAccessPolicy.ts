import type {ConditionalAccessConditionSet} from './conditionalAccessConditionSet';
import type {ConditionalAccessGrantControls} from './conditionalAccessGrantControls';
import type {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {ConditionalAccessPolicyState} from './conditionalAccessPolicyState';
import type {ConditionalAccessSessionControls} from './conditionalAccessSessionControls';
import {serializeConditionalAccessConditionSet} from './serializeConditionalAccessConditionSet';
import {serializeConditionalAccessGrantControls} from './serializeConditionalAccessGrantControls';
import {serializeConditionalAccessSessionControls} from './serializeConditionalAccessSessionControls';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessPolicy(writer: SerializationWriter, conditionalAccessPolicy: ConditionalAccessPolicy | undefined = {} as ConditionalAccessPolicy) : void {
        serializeEntity(writer, conditionalAccessPolicy)
        writer.writeObjectValue<ConditionalAccessConditionSet>("conditions", conditionalAccessPolicy.conditions, serializeConditionalAccessConditionSet);
        writer.writeDateValue("createdDateTime", conditionalAccessPolicy.createdDateTime);
        writer.writeStringValue("description", conditionalAccessPolicy.description);
        writer.writeStringValue("displayName", conditionalAccessPolicy.displayName);
        writer.writeObjectValue<ConditionalAccessGrantControls>("grantControls", conditionalAccessPolicy.grantControls, serializeConditionalAccessGrantControls);
        writer.writeDateValue("modifiedDateTime", conditionalAccessPolicy.modifiedDateTime);
        writer.writeObjectValue<ConditionalAccessSessionControls>("sessionControls", conditionalAccessPolicy.sessionControls, serializeConditionalAccessSessionControls);
        writer.writeEnumValue<ConditionalAccessPolicyState>("state", conditionalAccessPolicy.state);
}
