import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import type {GetManagedDevicesWithAppFailuresResponse} from './getManagedDevicesWithAppFailuresResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetManagedDevicesWithAppFailuresResponse(getManagedDevicesWithAppFailuresResponse: GetManagedDevicesWithAppFailuresResponse | undefined = {} as GetManagedDevicesWithAppFailuresResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getManagedDevicesWithAppFailuresResponse),
        "value": n => { getManagedDevicesWithAppFailuresResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
