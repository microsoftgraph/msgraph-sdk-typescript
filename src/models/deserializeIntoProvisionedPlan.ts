import {ProvisionedPlan} from './provisionedPlan';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisionedPlan(provisionedPlan: ProvisionedPlan | undefined = {} as ProvisionedPlan) : Record<string, (node: ParseNode) => void> {
    return {
        "capabilityStatus": n => { provisionedPlan.capabilityStatus = n.getStringValue(); },
        "@odata.type": n => { provisionedPlan.odataType = n.getStringValue(); },
        "provisioningStatus": n => { provisionedPlan.provisioningStatus = n.getStringValue(); },
        "service": n => { provisionedPlan.service = n.getStringValue(); },
    }
}
