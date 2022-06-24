import {ApprovalSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApprovalSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApprovalSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApprovalSettingsImpl();
}
