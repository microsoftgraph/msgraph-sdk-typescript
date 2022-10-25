import {HostSecurityStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHostSecurityStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : HostSecurityStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HostSecurityStateCollectionResponse();
}
