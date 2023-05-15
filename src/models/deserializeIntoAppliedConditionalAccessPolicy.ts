import {AppliedConditionalAccessPolicy} from './appliedConditionalAccessPolicy';
import {AppliedConditionalAccessPolicyResult} from './appliedConditionalAccessPolicyResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppliedConditionalAccessPolicy(appliedConditionalAccessPolicy: AppliedConditionalAccessPolicy | undefined = {} as AppliedConditionalAccessPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { appliedConditionalAccessPolicy.displayName = n.getStringValue(); },
        "enforcedGrantControls": n => { appliedConditionalAccessPolicy.enforcedGrantControls = n.getCollectionOfPrimitiveValues<string>(); },
        "enforcedSessionControls": n => { appliedConditionalAccessPolicy.enforcedSessionControls = n.getCollectionOfPrimitiveValues<string>(); },
        "id": n => { appliedConditionalAccessPolicy.id = n.getStringValue(); },
        "@odata.type": n => { appliedConditionalAccessPolicy.odataType = n.getStringValue(); },
        "result": n => { appliedConditionalAccessPolicy.result = n.getEnumValue<AppliedConditionalAccessPolicyResult>(AppliedConditionalAccessPolicyResult); },
    }
}
