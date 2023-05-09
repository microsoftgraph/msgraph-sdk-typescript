import {WindowsInformationProtectionDataRecoveryCertificate} from './windowsInformationProtectionDataRecoveryCertificate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionDataRecoveryCertificate(windowsInformationProtectionDataRecoveryCertificate: WindowsInformationProtectionDataRecoveryCertificate | undefined = {} as WindowsInformationProtectionDataRecoveryCertificate) : Record<string, (node: ParseNode) => void> {
    return {
        "certificate": n => { windowsInformationProtectionDataRecoveryCertificate.certificate = n.getStringValue(); },
        "description": n => { windowsInformationProtectionDataRecoveryCertificate.description = n.getStringValue(); },
        "expirationDateTime": n => { windowsInformationProtectionDataRecoveryCertificate.expirationDateTime = n.getDateValue(); },
        "@odata.type": n => { windowsInformationProtectionDataRecoveryCertificate.odataType = n.getStringValue(); },
        "subjectName": n => { windowsInformationProtectionDataRecoveryCertificate.subjectName = n.getStringValue(); },
    }
}
