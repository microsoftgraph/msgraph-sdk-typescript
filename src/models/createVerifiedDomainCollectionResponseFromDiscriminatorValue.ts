import {VerifiedDomainCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVerifiedDomainCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : VerifiedDomainCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VerifiedDomainCollectionResponse();
}
