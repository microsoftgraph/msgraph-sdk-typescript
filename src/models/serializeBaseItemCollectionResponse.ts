import type {BaseItem} from './baseItem';
import type {BaseItemCollectionResponse} from './baseItemCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBaseItem} from './serializeBaseItem';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBaseItemCollectionResponse(writer: SerializationWriter, baseItemCollectionResponse: BaseItemCollectionResponse | undefined = {} as BaseItemCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, baseItemCollectionResponse)
        writer.writeCollectionOfObjectValues<BaseItem>("value", baseItemCollectionResponse.value, serializeBaseItem);
}
