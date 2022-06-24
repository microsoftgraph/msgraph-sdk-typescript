import {CertificationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCertificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : CertificationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CertificationImpl();
}
