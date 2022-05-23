import {TargetedManagedAppConfigurationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetedManagedAppConfigurationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetedManagedAppConfigurationCollectionResponseImpl();
}
