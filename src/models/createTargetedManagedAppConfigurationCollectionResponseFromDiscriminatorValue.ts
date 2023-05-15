import {deserializeIntoTargetedManagedAppConfigurationCollectionResponse} from './deserializeIntoTargetedManagedAppConfigurationCollectionResponse';
import {TargetedManagedAppConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetedManagedAppConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTargetedManagedAppConfigurationCollectionResponse;
}
