import {UsedInsightImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsedInsightFromDiscriminatorValue(parseNode: ParseNode | undefined) : UsedInsightImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UsedInsightImpl();
}
