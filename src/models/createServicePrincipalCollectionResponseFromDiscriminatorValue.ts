import {ServicePrincipalCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicePrincipalCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServicePrincipalCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServicePrincipalCollectionResponseImpl();
}
