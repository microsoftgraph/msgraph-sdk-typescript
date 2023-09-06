import { deserializeIntoServicePrincipalCollectionResponse } from './deserializeIntoServicePrincipalCollectionResponse';
import { type ServicePrincipalCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServicePrincipalCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServicePrincipalCollectionResponse;
}
