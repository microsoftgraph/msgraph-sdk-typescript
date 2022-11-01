import {IosNotificationSettingsCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosNotificationSettingsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosNotificationSettingsCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosNotificationSettingsCollectionResponse();
}
