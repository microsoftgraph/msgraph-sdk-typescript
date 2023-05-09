import {deserializeIntoCertificationControl} from './deserializeIntoCertificationControl';
import {CertificationControl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCertificationControlFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCertificationControl;
}
