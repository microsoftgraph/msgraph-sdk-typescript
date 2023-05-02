import {deserializeIntoApprovalSettings} from './deserializeIntoApprovalSettings';
import {ApprovalSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApprovalSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApprovalSettings;
}
