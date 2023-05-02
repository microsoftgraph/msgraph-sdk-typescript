import {MobileAppContentFile} from './mobileAppContentFile';
import {MobileAppContentFileUploadState} from './mobileAppContentFileUploadState';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppContentFile(writer: SerializationWriter, mobileAppContentFile: MobileAppContentFile | undefined = {} as MobileAppContentFile) : void {
        serializeEntity(writer, mobileAppContentFile)
        writer.writeStringValue("azureStorageUri", mobileAppContentFile.azureStorageUri);
        writer.writeDateValue("azureStorageUriExpirationDateTime", mobileAppContentFile.azureStorageUriExpirationDateTime);
        writer.writeDateValue("createdDateTime", mobileAppContentFile.createdDateTime);
        writer.writeBooleanValue("isCommitted", mobileAppContentFile.isCommitted);
        writer.writeStringValue("manifest", mobileAppContentFile.manifest);
        writer.writeStringValue("name", mobileAppContentFile.name);
        writer.writeNumberValue("size", mobileAppContentFile.size);
        writer.writeNumberValue("sizeEncrypted", mobileAppContentFile.sizeEncrypted);
        writer.writeEnumValue<MobileAppContentFileUploadState>("uploadState", mobileAppContentFile.uploadState);
}
