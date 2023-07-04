import {deserializeIntoInsightValueDouble} from './deserializeIntoInsightValueDouble';
import {InsightValueDouble} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInsightValueDoubleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInsightValueDouble;
}
