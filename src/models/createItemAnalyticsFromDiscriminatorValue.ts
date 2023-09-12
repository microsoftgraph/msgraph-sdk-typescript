import { deserializeIntoItemAnalytics } from './deserializeIntoItemAnalytics';
import { type ItemAnalytics } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createItemAnalyticsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemAnalytics;
}
