import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {AvailableProviderTypesResponse} from './availableProviderTypesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAvailableProviderTypesResponse(availableProviderTypesResponse: AvailableProviderTypesResponse | undefined = {} as AvailableProviderTypesResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(availableProviderTypesResponse),
        "value": n => { availableProviderTypesResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
