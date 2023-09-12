import { deserializeIntoConnectedOrganization } from './deserializeIntoConnectedOrganization';
import { type ConnectedOrganization } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConnectedOrganizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConnectedOrganization;
}
