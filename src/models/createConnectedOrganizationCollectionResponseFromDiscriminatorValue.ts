import {ConnectedOrganizationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectedOrganizationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConnectedOrganizationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConnectedOrganizationCollectionResponseImpl();
}
