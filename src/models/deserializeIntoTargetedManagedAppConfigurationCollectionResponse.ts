import {createTargetedManagedAppConfigurationFromDiscriminatorValue} from './createTargetedManagedAppConfigurationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTargetedManagedAppConfiguration} from './serializeTargetedManagedAppConfiguration';
import {TargetedManagedAppConfiguration} from './targetedManagedAppConfiguration';
import {TargetedManagedAppConfigurationCollectionResponse} from './targetedManagedAppConfigurationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetedManagedAppConfigurationCollectionResponse(targetedManagedAppConfigurationCollectionResponse: TargetedManagedAppConfigurationCollectionResponse | undefined = {} as TargetedManagedAppConfigurationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(targetedManagedAppConfigurationCollectionResponse),
        "value": n => { targetedManagedAppConfigurationCollectionResponse.value = n.getCollectionOfObjectValues<TargetedManagedAppConfiguration>(createTargetedManagedAppConfigurationFromDiscriminatorValue); },
    }
}
