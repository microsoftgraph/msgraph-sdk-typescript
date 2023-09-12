import { deserializeIntoApprovalSettings } from './deserializeIntoApprovalSettings';
import { type ApprovalSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApprovalSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApprovalSettings;
}
