import {deserializeIntoServicePrincipalCollectionResponse} from './deserializeIntoServicePrincipalCollectionResponse';
import {ServicePrincipalCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicePrincipalCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServicePrincipalCollectionResponse;
}
