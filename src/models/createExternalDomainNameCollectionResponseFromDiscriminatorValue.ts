import {ExternalDomainNameCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalDomainNameCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalDomainNameCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalDomainNameCollectionResponse();
}
