import { deserializeIntoEnterpriseCodeSigningCertificate } from './deserializeIntoEnterpriseCodeSigningCertificate';
import { type EnterpriseCodeSigningCertificate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEnterpriseCodeSigningCertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEnterpriseCodeSigningCertificate;
}
