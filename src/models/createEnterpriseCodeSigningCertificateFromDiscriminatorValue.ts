import {EnterpriseCodeSigningCertificate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEnterpriseCodeSigningCertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) : EnterpriseCodeSigningCertificate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EnterpriseCodeSigningCertificate();
}
