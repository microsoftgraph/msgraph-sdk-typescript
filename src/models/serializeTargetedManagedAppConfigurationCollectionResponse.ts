import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeTargetedManagedAppConfiguration } from './serializeTargetedManagedAppConfiguration';
import { type TargetedManagedAppConfiguration } from './targetedManagedAppConfiguration';
import { type TargetedManagedAppConfigurationCollectionResponse } from './targetedManagedAppConfigurationCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTargetedManagedAppConfigurationCollectionResponse(writer: SerializationWriter, targetedManagedAppConfigurationCollectionResponse: TargetedManagedAppConfigurationCollectionResponse | undefined = {} as TargetedManagedAppConfigurationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, targetedManagedAppConfigurationCollectionResponse)
        writer.writeCollectionOfObjectValues<TargetedManagedAppConfiguration>("value", targetedManagedAppConfigurationCollectionResponse.value, serializeTargetedManagedAppConfiguration);
}
