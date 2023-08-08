import type {ConditionalAccessConditionSet} from './conditionalAccessConditionSet';
import type {ConditionalAccessGrantControls} from './conditionalAccessGrantControls';
import type {ConditionalAccessPolicyDetail} from './conditionalAccessPolicyDetail';
import type {ConditionalAccessSessionControls} from './conditionalAccessSessionControls';
import {createConditionalAccessConditionSetFromDiscriminatorValue} from './createConditionalAccessConditionSetFromDiscriminatorValue';
import {createConditionalAccessGrantControlsFromDiscriminatorValue} from './createConditionalAccessGrantControlsFromDiscriminatorValue';
import {createConditionalAccessSessionControlsFromDiscriminatorValue} from './createConditionalAccessSessionControlsFromDiscriminatorValue';
import {serializeConditionalAccessConditionSet} from './serializeConditionalAccessConditionSet';
import {serializeConditionalAccessGrantControls} from './serializeConditionalAccessGrantControls';
import {serializeConditionalAccessSessionControls} from './serializeConditionalAccessSessionControls';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessPolicyDetail(conditionalAccessPolicyDetail: ConditionalAccessPolicyDetail | undefined = {} as ConditionalAccessPolicyDetail) : Record<string, (node: ParseNode) => void> {
    return {
        "conditions": n => { conditionalAccessPolicyDetail.conditions = n.getObjectValue<ConditionalAccessConditionSet>(createConditionalAccessConditionSetFromDiscriminatorValue); },
        "grantControls": n => { conditionalAccessPolicyDetail.grantControls = n.getObjectValue<ConditionalAccessGrantControls>(createConditionalAccessGrantControlsFromDiscriminatorValue); },
        "@odata.type": n => { conditionalAccessPolicyDetail.odataType = n.getStringValue(); },
        "sessionControls": n => { conditionalAccessPolicyDetail.sessionControls = n.getObjectValue<ConditionalAccessSessionControls>(createConditionalAccessSessionControlsFromDiscriminatorValue); },
    }
}
