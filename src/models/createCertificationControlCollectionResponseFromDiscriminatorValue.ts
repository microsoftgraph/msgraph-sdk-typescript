import {CertificationControlCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCertificationControlCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CertificationControlCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CertificationControlCollectionResponse();
}
