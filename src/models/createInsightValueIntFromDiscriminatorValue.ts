import {deserializeIntoInsightValueInt} from './deserializeIntoInsightValueInt';
import {InsightValueInt} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInsightValueIntFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInsightValueInt;
}
