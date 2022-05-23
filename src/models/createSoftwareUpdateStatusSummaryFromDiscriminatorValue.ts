import {SoftwareUpdateStatusSummaryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSoftwareUpdateStatusSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : SoftwareUpdateStatusSummaryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SoftwareUpdateStatusSummaryImpl();
}
