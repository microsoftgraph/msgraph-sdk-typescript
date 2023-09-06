import { deserializeIntoSoftwareUpdateStatusSummary } from './deserializeIntoSoftwareUpdateStatusSummary';
import { type SoftwareUpdateStatusSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSoftwareUpdateStatusSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSoftwareUpdateStatusSummary;
}
