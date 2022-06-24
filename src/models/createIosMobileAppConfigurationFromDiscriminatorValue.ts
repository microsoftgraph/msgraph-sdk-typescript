import {IosMobileAppConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosMobileAppConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosMobileAppConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosMobileAppConfigurationImpl();
}
