import { deserializeIntoOrganization } from './deserializeIntoOrganization';
import { type Organization } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOrganizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOrganization;
}
