import {ManagedAppConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppConfigurationImpl();
}
