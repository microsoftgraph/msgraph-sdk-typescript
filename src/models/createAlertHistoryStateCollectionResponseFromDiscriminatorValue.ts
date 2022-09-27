import {AlertHistoryStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertHistoryStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertHistoryStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertHistoryStateCollectionResponse();
}
