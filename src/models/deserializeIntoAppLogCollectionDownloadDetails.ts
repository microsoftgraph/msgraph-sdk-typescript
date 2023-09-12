import { type AppLogCollectionDownloadDetails } from './appLogCollectionDownloadDetails';
import { AppLogDecryptionAlgorithm } from './appLogDecryptionAlgorithm';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAppLogCollectionDownloadDetails(appLogCollectionDownloadDetails: AppLogCollectionDownloadDetails | undefined = {} as AppLogCollectionDownloadDetails) : Record<string, (node: ParseNode) => void> {
    return {
        "appLogDecryptionAlgorithm": n => { appLogCollectionDownloadDetails.appLogDecryptionAlgorithm = n.getEnumValue<AppLogDecryptionAlgorithm>(AppLogDecryptionAlgorithm); },
        "decryptionKey": n => { appLogCollectionDownloadDetails.decryptionKey = n.getStringValue(); },
        "downloadUrl": n => { appLogCollectionDownloadDetails.downloadUrl = n.getStringValue(); },
        "@odata.type": n => { appLogCollectionDownloadDetails.odataType = n.getStringValue(); },
    }
}
