import {IpNamedLocationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIpNamedLocationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IpNamedLocationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IpNamedLocationCollectionResponse();
}
