import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import type {GetManagedDevicesWithAppFailuresResponse} from './getManagedDevicesWithAppFailuresResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetManagedDevicesWithAppFailuresResponse(writer: SerializationWriter, getManagedDevicesWithAppFailuresResponse: GetManagedDevicesWithAppFailuresResponse | undefined = {} as GetManagedDevicesWithAppFailuresResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getManagedDevicesWithAppFailuresResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", getManagedDevicesWithAppFailuresResponse.value);
}
