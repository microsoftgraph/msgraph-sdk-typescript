import type {ColumnDefinition} from './columnDefinition';
import type {ColumnDefinitionCollectionResponse} from './columnDefinitionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeColumnDefinition} from './serializeColumnDefinition';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeColumnDefinitionCollectionResponse(writer: SerializationWriter, columnDefinitionCollectionResponse: ColumnDefinitionCollectionResponse | undefined = {} as ColumnDefinitionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, columnDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<ColumnDefinition>("value", columnDefinitionCollectionResponse.value, serializeColumnDefinition);
}
