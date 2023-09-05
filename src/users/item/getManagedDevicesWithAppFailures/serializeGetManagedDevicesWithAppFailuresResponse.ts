import { serializeBaseCollectionPaginationCountResponse } from '../../../models/serializeBaseCollectionPaginationCountResponse';
import { type GetManagedDevicesWithAppFailuresResponse } from './getManagedDevicesWithAppFailuresResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetManagedDevicesWithAppFailuresResponse(writer: SerializationWriter, getManagedDevicesWithAppFailuresResponse: GetManagedDevicesWithAppFailuresResponse | undefined = {} as GetManagedDevicesWithAppFailuresResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getManagedDevicesWithAppFailuresResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", getManagedDevicesWithAppFailuresResponse.value);
}
