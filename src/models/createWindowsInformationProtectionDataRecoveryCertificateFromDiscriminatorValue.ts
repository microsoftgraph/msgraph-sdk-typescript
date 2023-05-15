import {deserializeIntoWindowsInformationProtectionDataRecoveryCertificate} from './deserializeIntoWindowsInformationProtectionDataRecoveryCertificate';
import {WindowsInformationProtectionDataRecoveryCertificate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionDataRecoveryCertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionDataRecoveryCertificate;
}
