import {deserializeIntoOfficeGraphInsights} from './deserializeIntoOfficeGraphInsights';
import {OfficeGraphInsights} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOfficeGraphInsightsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOfficeGraphInsights;
}
