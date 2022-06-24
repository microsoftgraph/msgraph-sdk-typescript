import {IosCertificateProfileImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosCertificateProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosCertificateProfileImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosCertificateProfileImpl();
}
