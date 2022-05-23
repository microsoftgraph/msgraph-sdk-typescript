import {TargetedManagedAppConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetedManagedAppConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetedManagedAppConfigurationImpl();
}
