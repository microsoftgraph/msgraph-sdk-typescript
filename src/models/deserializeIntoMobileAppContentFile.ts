import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MobileAppContentFile} from './mobileAppContentFile';
import {MobileAppContentFileUploadState} from './mobileAppContentFileUploadState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppContentFile(mobileAppContentFile: MobileAppContentFile | undefined = {} as MobileAppContentFile) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileAppContentFile),
        "azureStorageUri": n => { mobileAppContentFile.azureStorageUri = n.getStringValue(); },
        "azureStorageUriExpirationDateTime": n => { mobileAppContentFile.azureStorageUriExpirationDateTime = n.getDateValue(); },
        "createdDateTime": n => { mobileAppContentFile.createdDateTime = n.getDateValue(); },
        "isCommitted": n => { mobileAppContentFile.isCommitted = n.getBooleanValue(); },
        "manifest": n => { mobileAppContentFile.manifest = n.getStringValue(); },
        "name": n => { mobileAppContentFile.name = n.getStringValue(); },
        "size": n => { mobileAppContentFile.size = n.getNumberValue(); },
        "sizeEncrypted": n => { mobileAppContentFile.sizeEncrypted = n.getNumberValue(); },
        "uploadState": n => { mobileAppContentFile.uploadState = n.getEnumValue<MobileAppContentFileUploadState>(MobileAppContentFileUploadState); },
    }
}
