import {AssignedLicense} from './assignedLicense';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignedLicense(assignedLicense: AssignedLicense | undefined = {} as AssignedLicense) : Record<string, (node: ParseNode) => void> {
    return {
        "disabledPlans": n => { assignedLicense.disabledPlans = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { assignedLicense.odataType = n.getStringValue(); },
        "skuId": n => { assignedLicense.skuId = n.getStringValue(); },
    }
}
