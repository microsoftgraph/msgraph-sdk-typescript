import {ConditionalAccessConditionSet} from './conditionalAccessConditionSet';
import {ConditionalAccessGrantControls} from './conditionalAccessGrantControls';
import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {ConditionalAccessPolicyState} from './conditionalAccessPolicyState';
import {ConditionalAccessSessionControls} from './conditionalAccessSessionControls';
import {serializeConditionalAccessConditionSet} from './serializeConditionalAccessConditionSet';
import {serializeConditionalAccessGrantControls} from './serializeConditionalAccessGrantControls';
import {serializeConditionalAccessSessionControls} from './serializeConditionalAccessSessionControls';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
