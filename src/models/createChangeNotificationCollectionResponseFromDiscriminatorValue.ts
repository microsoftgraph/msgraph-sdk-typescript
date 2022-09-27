import {ChangeNotificationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangeNotificationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChangeNotificationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChangeNotificationCollectionResponse();
}
