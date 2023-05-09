import {ConditionalAccessConditionSet} from './conditionalAccessConditionSet';
import {ConditionalAccessGrantControls} from './conditionalAccessGrantControls';
import {ConditionalAccessPolicyDetail} from './conditionalAccessPolicyDetail';
import {ConditionalAccessSessionControls} from './conditionalAccessSessionControls';
import {serializeConditionalAccessConditionSet} from './serializeConditionalAccessConditionSet';
import {serializeConditionalAccessGrantControls} from './serializeConditionalAccessGrantControls';
import {serializeConditionalAccessSessionControls} from './serializeConditionalAccessSessionControls';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessPolicyDetail(writer: SerializationWriter, conditionalAccessPolicyDetail: ConditionalAccessPolicyDetail | undefined = {} as ConditionalAccessPolicyDetail) : void {
        writer.writeObjectValue<ConditionalAccessConditionSet>("conditions", conditionalAccessPolicyDetail.conditions, serializeConditionalAccessConditionSet);
        writer.writeObjectValue<ConditionalAccessGrantControls>("grantControls", conditionalAccessPolicyDetail.grantControls, serializeConditionalAccessGrantControls);
        writer.writeStringValue("@odata.type", conditionalAccessPolicyDetail.odataType);
        writer.writeObjectValue<ConditionalAccessSessionControls>("sessionControls", conditionalAccessPolicyDetail.sessionControls, serializeConditionalAccessSessionControls);
        writer.writeAdditionalData(conditionalAccessPolicyDetail.additionalData);
}
