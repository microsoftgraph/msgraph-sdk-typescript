import {deserializeIntoRiskyUserHistoryItemCollectionResponse} from './deserializeIntoRiskyUserHistoryItemCollectionResponse';
import {RiskyUserHistoryItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyUserHistoryItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRiskyUserHistoryItemCollectionResponse;
}
