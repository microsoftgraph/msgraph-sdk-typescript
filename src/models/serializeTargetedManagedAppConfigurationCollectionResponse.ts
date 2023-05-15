import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTargetedManagedAppConfiguration} from './serializeTargetedManagedAppConfiguration';
import {TargetedManagedAppConfiguration} from './targetedManagedAppConfiguration';
import {TargetedManagedAppConfigurationCollectionResponse} from './targetedManagedAppConfigurationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetedManagedAppConfigurationCollectionResponse(writer: SerializationWriter, targetedManagedAppConfigurationCollectionResponse: TargetedManagedAppConfigurationCollectionResponse | undefined = {} as TargetedManagedAppConfigurationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, targetedManagedAppConfigurationCollectionResponse)
        writer.writeCollectionOfObjectValues<TargetedManagedAppConfiguration>("value", targetedManagedAppConfigurationCollectionResponse.value, serializeTargetedManagedAppConfiguration);
}
