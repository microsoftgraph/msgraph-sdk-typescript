import {AssignedLicense} from './assignedLicense';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeAssignedLicense(writer: SerializationWriter, assignedLicense: AssignedLicense | undefined = {} as AssignedLicense) : void {
        writer.writeCollectionOfPrimitiveValues<Guid>("disabledPlans", assignedLicense.disabledPlans);
        writer.writeStringValue("@odata.type", assignedLicense.odataType);
        writer.writeGuidValue("skuId", assignedLicense.skuId);
        writer.writeAdditionalData(assignedLicense.additionalData);
}
