import {ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse} from './managedDeviceMobileAppConfigurationUserStatusCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationUserStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse();
}
