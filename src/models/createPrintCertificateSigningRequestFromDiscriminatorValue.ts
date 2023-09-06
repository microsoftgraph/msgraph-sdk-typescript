import { deserializeIntoPrintCertificateSigningRequest } from './deserializeIntoPrintCertificateSigningRequest';
import { type PrintCertificateSigningRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintCertificateSigningRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintCertificateSigningRequest;
}
