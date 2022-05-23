import {UsedInsightCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsedInsightCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UsedInsightCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UsedInsightCollectionResponseImpl();
}
