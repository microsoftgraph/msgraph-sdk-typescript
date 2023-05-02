import {ColumnLink} from './columnLink';
import {ColumnLinkCollectionResponse} from './columnLinkCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeColumnLink} from './serializeColumnLink';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeColumnLinkCollectionResponse(writer: SerializationWriter, columnLinkCollectionResponse: ColumnLinkCollectionResponse | undefined = {} as ColumnLinkCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, columnLinkCollectionResponse)
        writer.writeCollectionOfObjectValues<ColumnLink>("value", columnLinkCollectionResponse.value, serializeColumnLink);
}
