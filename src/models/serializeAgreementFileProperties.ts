import {AgreementFileData} from './agreementFileData';
import {AgreementFileProperties} from './agreementFileProperties';
import {serializeAgreementFileData} from './serializeAgreementFileData';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileProperties(writer: SerializationWriter, agreementFileProperties: AgreementFileProperties | undefined = {} as AgreementFileProperties) : void {
        serializeEntity(writer, agreementFileProperties)
        writer.writeDateValue("createdDateTime", agreementFileProperties.createdDateTime);
        writer.writeStringValue("displayName", agreementFileProperties.displayName);
        writer.writeObjectValue<AgreementFileData>("fileData", agreementFileProperties.fileData, serializeAgreementFileData);
        writer.writeStringValue("fileName", agreementFileProperties.fileName);
        writer.writeBooleanValue("isDefault", agreementFileProperties.isDefault);
        writer.writeBooleanValue("isMajorVersion", agreementFileProperties.isMajorVersion);
        writer.writeStringValue("language", agreementFileProperties.language);
}
