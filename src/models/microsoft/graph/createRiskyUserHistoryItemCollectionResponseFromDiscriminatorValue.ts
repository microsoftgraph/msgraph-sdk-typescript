import {RiskyUserHistoryItemCollectionResponse} from './riskyUserHistoryItemCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyUserHistoryItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskyUserHistoryItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskyUserHistoryItemCollectionResponse();
}
