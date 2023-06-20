import {AssignedLicense} from './assignedLicense';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedLicense(assignedLicense: AssignedLicense | undefined = {} as AssignedLicense, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("disabledPlans", assignedLicense.disabledPlans);
        writer.writeStringValue("@odata.type", assignedLicense.odataType);
        writer.writeStringValue("skuId", assignedLicense.skuId);
        writer.writeAdditionalData(assignedLicense.additionalData);
}
