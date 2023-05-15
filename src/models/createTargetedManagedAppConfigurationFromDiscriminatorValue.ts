import {deserializeIntoTargetedManagedAppConfiguration} from './deserializeIntoTargetedManagedAppConfiguration';
import {TargetedManagedAppConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTargetedManagedAppConfiguration;
}
