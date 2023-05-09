import {ConditionalAccessConditionSet} from './conditionalAccessConditionSet';
import {ConditionalAccessGrantControls} from './conditionalAccessGrantControls';
import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {ConditionalAccessPolicyState} from './conditionalAccessPolicyState';
import {ConditionalAccessSessionControls} from './conditionalAccessSessionControls';
import {createConditionalAccessConditionSetFromDiscriminatorValue} from './createConditionalAccessConditionSetFromDiscriminatorValue';
import {createConditionalAccessGrantControlsFromDiscriminatorValue} from './createConditionalAccessGrantControlsFromDiscriminatorValue';
import {createConditionalAccessSessionControlsFromDiscriminatorValue} from './createConditionalAccessSessionControlsFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeConditionalAccessConditionSet} from './serializeConditionalAccessConditionSet';
import {serializeConditionalAccessGrantControls} from './serializeConditionalAccessGrantControls';
import {serializeConditionalAccessSessionControls} from './serializeConditionalAccessSessionControls';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessPolicy(conditionalAccessPolicy: ConditionalAccessPolicy | undefined = {} as ConditionalAccessPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(conditionalAccessPolicy),
        "conditions": n => { conditionalAccessPolicy.conditions = n.getObjectValue<ConditionalAccessConditionSet>(createConditionalAccessConditionSetFromDiscriminatorValue); },
        "createdDateTime": n => { conditionalAccessPolicy.createdDateTime = n.getDateValue(); },
        "description": n => { conditionalAccessPolicy.description = n.getStringValue(); },
        "displayName": n => { conditionalAccessPolicy.displayName = n.getStringValue(); },
        "grantControls": n => { conditionalAccessPolicy.grantControls = n.getObjectValue<ConditionalAccessGrantControls>(createConditionalAccessGrantControlsFromDiscriminatorValue); },
        "modifiedDateTime": n => { conditionalAccessPolicy.modifiedDateTime = n.getDateValue(); },
        "sessionControls": n => { conditionalAccessPolicy.sessionControls = n.getObjectValue<ConditionalAccessSessionControls>(createConditionalAccessSessionControlsFromDiscriminatorValue); },
        "state": n => { conditionalAccessPolicy.state = n.getEnumValue<ConditionalAccessPolicyState>(ConditionalAccessPolicyState); },
    }
}
