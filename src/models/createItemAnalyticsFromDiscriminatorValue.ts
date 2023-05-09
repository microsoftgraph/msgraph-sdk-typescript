import {deserializeIntoItemAnalytics} from './deserializeIntoItemAnalytics';
import {ItemAnalytics} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemAnalyticsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemAnalytics;
}
