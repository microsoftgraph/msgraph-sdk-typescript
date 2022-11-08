import {AppConfigurationSettingItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppConfigurationSettingItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppConfigurationSettingItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppConfigurationSettingItemCollectionResponse();
}
