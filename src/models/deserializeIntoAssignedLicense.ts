import { type AssignedLicense } from './assignedLicense';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function deserializeIntoAssignedLicense(assignedLicense: AssignedLicense | undefined = {} as AssignedLicense) : Record<string, (node: ParseNode) => void> {
    return {
        "disabledPlans": n => { assignedLicense.disabledPlans = n.getCollectionOfPrimitiveValues<Guid>(); },
        "@odata.type": n => { assignedLicense.odataType = n.getStringValue(); },
        "skuId": n => { assignedLicense.skuId = n.getGuidValue(); },
    }
}
