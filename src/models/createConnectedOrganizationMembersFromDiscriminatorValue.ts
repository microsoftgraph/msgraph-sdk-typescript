import { deserializeIntoConnectedOrganizationMembers } from './deserializeIntoConnectedOrganizationMembers';
import { type ConnectedOrganizationMembers } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConnectedOrganizationMembersFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConnectedOrganizationMembers;
}
