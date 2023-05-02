import {deserializeIntoManagedDeviceMobileAppConfigurationCollectionResponse} from './deserializeIntoManagedDeviceMobileAppConfigurationCollectionResponse';
import {ManagedDeviceMobileAppConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceMobileAppConfigurationCollectionResponse;
}
