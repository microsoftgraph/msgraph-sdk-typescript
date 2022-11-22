import {AlertTriggerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertTriggerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertTriggerCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertTriggerCollectionResponse();
}
