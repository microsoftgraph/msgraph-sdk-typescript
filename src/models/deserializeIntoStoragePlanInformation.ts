import {StoragePlanInformation} from './storagePlanInformation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStoragePlanInformation(storagePlanInformation: StoragePlanInformation | undefined = {} as StoragePlanInformation) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { storagePlanInformation.odataType = n.getStringValue(); },
        "upgradeAvailable": n => { storagePlanInformation.upgradeAvailable = n.getBooleanValue(); },
    }
}
