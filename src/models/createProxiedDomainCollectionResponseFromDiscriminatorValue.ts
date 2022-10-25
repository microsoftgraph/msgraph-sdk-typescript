import {ProxiedDomainCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProxiedDomainCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProxiedDomainCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProxiedDomainCollectionResponse();
}
