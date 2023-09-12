import { deserializeIntoOfficeGraphInsights } from './deserializeIntoOfficeGraphInsights';
import { type OfficeGraphInsights } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOfficeGraphInsightsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOfficeGraphInsights;
}
