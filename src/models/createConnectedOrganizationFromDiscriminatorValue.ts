import {ConnectedOrganizationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectedOrganizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConnectedOrganizationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConnectedOrganizationImpl();
}
