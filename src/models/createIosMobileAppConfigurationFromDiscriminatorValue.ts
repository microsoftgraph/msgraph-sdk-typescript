import { deserializeIntoIosMobileAppConfiguration } from './deserializeIntoIosMobileAppConfiguration';
import { type IosMobileAppConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosMobileAppConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosMobileAppConfiguration;
}
