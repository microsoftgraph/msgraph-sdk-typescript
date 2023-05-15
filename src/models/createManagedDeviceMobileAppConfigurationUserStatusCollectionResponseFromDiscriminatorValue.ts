import {deserializeIntoManagedDeviceMobileAppConfigurationUserStatusCollectionResponse} from './deserializeIntoManagedDeviceMobileAppConfigurationUserStatusCollectionResponse';
import {ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationUserStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceMobileAppConfigurationUserStatusCollectionResponse;
}
