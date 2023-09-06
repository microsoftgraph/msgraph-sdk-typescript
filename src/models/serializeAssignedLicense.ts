import { type AssignedLicense } from './assignedLicense';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function serializeAssignedLicense(writer: SerializationWriter, assignedLicense: AssignedLicense | undefined = {} as AssignedLicense) : void {
        writer.writeCollectionOfPrimitiveValues<Guid>("disabledPlans", assignedLicense.disabledPlans);
        writer.writeStringValue("@odata.type", assignedLicense.odataType);
        writer.writeGuidValue("skuId", assignedLicense.skuId);
        writer.writeAdditionalData(assignedLicense.additionalData);
}
