import {AssignedLicense} from './assignedLicense';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedLicense(writer: SerializationWriter, assignedLicense: AssignedLicense | undefined = {} as AssignedLicense) : void {
        writer.writeCollectionOfPrimitiveValues<string>("disabledPlans", assignedLicense.disabledPlans);
        writer.writeStringValue("@odata.type", assignedLicense.odataType);
        writer.writeStringValue("skuId", assignedLicense.skuId);
        writer.writeAdditionalData(assignedLicense.additionalData);
}
