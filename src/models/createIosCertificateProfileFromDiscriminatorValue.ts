import { deserializeIntoIosCertificateProfile } from './deserializeIntoIosCertificateProfile';
import { type IosCertificateProfile } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosCertificateProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosCertificateProfile;
}
