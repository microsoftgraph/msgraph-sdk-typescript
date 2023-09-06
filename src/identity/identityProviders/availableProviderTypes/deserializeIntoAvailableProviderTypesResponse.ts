import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type AvailableProviderTypesResponse } from './availableProviderTypesResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAvailableProviderTypesResponse(availableProviderTypesResponse: AvailableProviderTypesResponse | undefined = {} as AvailableProviderTypesResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(availableProviderTypesResponse),
        "value": n => { availableProviderTypesResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
