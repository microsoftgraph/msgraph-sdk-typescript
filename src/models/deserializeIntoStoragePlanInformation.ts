import { type StoragePlanInformation } from './storagePlanInformation';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoStoragePlanInformation(storagePlanInformation: StoragePlanInformation | undefined = {} as StoragePlanInformation) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { storagePlanInformation.odataType = n.getStringValue(); },
        "upgradeAvailable": n => { storagePlanInformation.upgradeAvailable = n.getBooleanValue(); },
    }
}
