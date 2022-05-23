import {ManagedDeviceMobileAppConfigurationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceMobileAppConfigurationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceMobileAppConfigurationCollectionResponseImpl();
}
