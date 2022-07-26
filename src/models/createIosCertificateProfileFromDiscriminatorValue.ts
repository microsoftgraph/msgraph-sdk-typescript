import {IosCertificateProfile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosCertificateProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosCertificateProfile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosCertificateProfile();
}
