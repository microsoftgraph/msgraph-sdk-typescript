import { deserializeIntoTargetedManagedAppConfigurationCollectionResponse } from './deserializeIntoTargetedManagedAppConfigurationCollectionResponse';
import { type TargetedManagedAppConfigurationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTargetedManagedAppConfigurationCollectionResponse;
}
