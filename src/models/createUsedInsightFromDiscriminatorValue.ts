import {deserializeIntoUsedInsight} from './deserializeIntoUsedInsight';
import {UsedInsight} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsedInsightFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUsedInsight;
}
