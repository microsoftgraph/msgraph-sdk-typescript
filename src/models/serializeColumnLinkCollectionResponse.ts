import {ColumnLink} from './columnLink';
import {ColumnLinkCollectionResponse} from './columnLinkCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeColumnLink} from './serializeColumnLink';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeColumnLinkCollectionResponse(columnLinkCollectionResponse: ColumnLinkCollectionResponse | undefined = {} as ColumnLinkCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, columnLinkCollectionResponse)
        writer.writeCollectionOfObjectValues<ColumnLink>("value", columnLinkCollectionResponse.value, serializeColumnLink);
}
