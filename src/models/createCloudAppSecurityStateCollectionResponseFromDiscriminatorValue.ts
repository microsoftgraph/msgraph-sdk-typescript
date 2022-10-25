import {CloudAppSecurityStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudAppSecurityStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudAppSecurityStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudAppSecurityStateCollectionResponse();
}
