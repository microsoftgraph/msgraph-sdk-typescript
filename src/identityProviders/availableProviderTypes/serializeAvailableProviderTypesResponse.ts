import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {AvailableProviderTypesResponse} from './availableProviderTypesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAvailableProviderTypesResponse(availableProviderTypesResponse: AvailableProviderTypesResponse | undefined = {} as AvailableProviderTypesResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, availableProviderTypesResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", availableProviderTypesResponse.value);
}
