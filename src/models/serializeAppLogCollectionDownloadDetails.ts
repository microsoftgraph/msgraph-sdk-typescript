import type {AppLogCollectionDownloadDetails} from './appLogCollectionDownloadDetails';
import {AppLogDecryptionAlgorithm} from './appLogDecryptionAlgorithm';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppLogCollectionDownloadDetails(writer: SerializationWriter, appLogCollectionDownloadDetails: AppLogCollectionDownloadDetails | undefined = {} as AppLogCollectionDownloadDetails) : void {
        writer.writeEnumValue<AppLogDecryptionAlgorithm>("appLogDecryptionAlgorithm", appLogCollectionDownloadDetails.appLogDecryptionAlgorithm);
        writer.writeStringValue("decryptionKey", appLogCollectionDownloadDetails.decryptionKey);
        writer.writeStringValue("downloadUrl", appLogCollectionDownloadDetails.downloadUrl);
        writer.writeStringValue("@odata.type", appLogCollectionDownloadDetails.odataType);
        writer.writeAdditionalData(appLogCollectionDownloadDetails.additionalData);
}
