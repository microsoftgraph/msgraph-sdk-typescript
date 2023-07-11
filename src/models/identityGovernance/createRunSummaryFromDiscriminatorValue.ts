import {deserializeIntoRunSummary} from './deserializeIntoRunSummary';
import {RunSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRunSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRunSummary;
}
