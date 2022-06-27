import {ConnectedOrganizationMembersImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectedOrganizationMembersFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConnectedOrganizationMembersImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConnectedOrganizationMembersImpl();
}
