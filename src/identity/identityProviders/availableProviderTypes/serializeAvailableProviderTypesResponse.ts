import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import type {AvailableProviderTypesResponse} from './availableProviderTypesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAvailableProviderTypesResponse(writer: SerializationWriter, availableProviderTypesResponse: AvailableProviderTypesResponse | undefined = {} as AvailableProviderTypesResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, availableProviderTypesResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", availableProviderTypesResponse.value);
}
