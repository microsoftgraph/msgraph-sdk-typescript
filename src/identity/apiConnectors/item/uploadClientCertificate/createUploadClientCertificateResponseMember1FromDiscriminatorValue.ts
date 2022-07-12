import {UploadClientCertificateResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUploadClientCertificateResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : UploadClientCertificateResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UploadClientCertificateResponseMember1();
}
