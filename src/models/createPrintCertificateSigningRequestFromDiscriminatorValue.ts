import {PrintCertificateSigningRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintCertificateSigningRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintCertificateSigningRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintCertificateSigningRequestImpl();
}
