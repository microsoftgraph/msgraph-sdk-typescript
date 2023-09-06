import { createTargetedManagedAppConfigurationFromDiscriminatorValue } from './createTargetedManagedAppConfigurationFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeTargetedManagedAppConfiguration } from './serializeTargetedManagedAppConfiguration';
import { type TargetedManagedAppConfiguration } from './targetedManagedAppConfiguration';
import { type TargetedManagedAppConfigurationCollectionResponse } from './targetedManagedAppConfigurationCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetedManagedAppConfigurationCollectionResponse(targetedManagedAppConfigurationCollectionResponse: TargetedManagedAppConfigurationCollectionResponse | undefined = {} as TargetedManagedAppConfigurationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(targetedManagedAppConfigurationCollectionResponse),
        "value": n => { targetedManagedAppConfigurationCollectionResponse.value = n.getCollectionOfObjectValues<TargetedManagedAppConfiguration>(createTargetedManagedAppConfigurationFromDiscriminatorValue); },
    }
}
