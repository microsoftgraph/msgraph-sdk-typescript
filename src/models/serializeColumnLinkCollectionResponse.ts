import { type ColumnLink } from './columnLink';
import { type ColumnLinkCollectionResponse } from './columnLinkCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeColumnLink } from './serializeColumnLink';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeColumnLinkCollectionResponse(writer: SerializationWriter, columnLinkCollectionResponse: ColumnLinkCollectionResponse | undefined = {} as ColumnLinkCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, columnLinkCollectionResponse)
        writer.writeCollectionOfObjectValues<ColumnLink>("value", columnLinkCollectionResponse.value, serializeColumnLink);
}
