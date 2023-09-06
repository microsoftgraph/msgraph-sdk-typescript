import { deserializeIntoUsageDetails } from './deserializeIntoUsageDetails';
import { type UsageDetails } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUsageDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUsageDetails;
}
