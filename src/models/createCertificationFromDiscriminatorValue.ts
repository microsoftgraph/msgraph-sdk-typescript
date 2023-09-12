import { deserializeIntoCertification } from './deserializeIntoCertification';
import { type Certification } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCertificationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCertification;
}
