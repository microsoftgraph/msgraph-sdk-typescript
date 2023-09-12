import { deserializeIntoOrgContact } from './deserializeIntoOrgContact';
import { type OrgContact } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOrgContactFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOrgContact;
}
