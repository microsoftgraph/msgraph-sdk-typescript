import {IosMobileAppConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosMobileAppConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosMobileAppConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosMobileAppConfigurationCollectionResponse();
}
