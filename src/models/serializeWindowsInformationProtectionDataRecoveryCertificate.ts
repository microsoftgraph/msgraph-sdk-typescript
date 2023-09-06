import { type WindowsInformationProtectionDataRecoveryCertificate } from './windowsInformationProtectionDataRecoveryCertificate';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionDataRecoveryCertificate(writer: SerializationWriter, windowsInformationProtectionDataRecoveryCertificate: WindowsInformationProtectionDataRecoveryCertificate | undefined = {} as WindowsInformationProtectionDataRecoveryCertificate) : void {
        writer.writeStringValue("certificate", windowsInformationProtectionDataRecoveryCertificate.certificate);
        writer.writeStringValue("description", windowsInformationProtectionDataRecoveryCertificate.description);
        writer.writeDateValue("expirationDateTime", windowsInformationProtectionDataRecoveryCertificate.expirationDateTime);
        writer.writeStringValue("@odata.type", windowsInformationProtectionDataRecoveryCertificate.odataType);
        writer.writeStringValue("subjectName", windowsInformationProtectionDataRecoveryCertificate.subjectName);
        writer.writeAdditionalData(windowsInformationProtectionDataRecoveryCertificate.additionalData);
}
