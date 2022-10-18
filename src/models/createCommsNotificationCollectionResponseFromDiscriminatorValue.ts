import {CommsNotificationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCommsNotificationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CommsNotificationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CommsNotificationCollectionResponse();
}
