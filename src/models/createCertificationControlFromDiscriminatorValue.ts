import {CertificationControlImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCertificationControlFromDiscriminatorValue(parseNode: ParseNode | undefined) : CertificationControlImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CertificationControlImpl();
}
