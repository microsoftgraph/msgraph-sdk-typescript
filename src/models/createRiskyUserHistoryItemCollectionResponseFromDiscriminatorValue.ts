import {RiskyUserHistoryItemCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyUserHistoryItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskyUserHistoryItemCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskyUserHistoryItemCollectionResponseImpl();
}
