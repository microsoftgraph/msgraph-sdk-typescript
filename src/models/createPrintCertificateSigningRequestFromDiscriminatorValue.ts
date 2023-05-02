import {deserializeIntoPrintCertificateSigningRequest} from './deserializeIntoPrintCertificateSigningRequest';
import {PrintCertificateSigningRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintCertificateSigningRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintCertificateSigningRequest;
}
