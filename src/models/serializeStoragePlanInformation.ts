import { type StoragePlanInformation } from './storagePlanInformation';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeStoragePlanInformation(writer: SerializationWriter, storagePlanInformation: StoragePlanInformation | undefined = {} as StoragePlanInformation) : void {
        writer.writeStringValue("@odata.type", storagePlanInformation.odataType);
        writer.writeBooleanValue("upgradeAvailable", storagePlanInformation.upgradeAvailable);
        writer.writeAdditionalData(storagePlanInformation.additionalData);
}
