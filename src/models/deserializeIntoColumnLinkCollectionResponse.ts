import {ColumnLink} from './columnLink';
import {ColumnLinkCollectionResponse} from './columnLinkCollectionResponse';
import {createColumnLinkFromDiscriminatorValue} from './createColumnLinkFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeColumnLink} from './serializeColumnLink';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoColumnLinkCollectionResponse(columnLinkCollectionResponse: ColumnLinkCollectionResponse | undefined = {} as ColumnLinkCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(columnLinkCollectionResponse),
        "value": n => { columnLinkCollectionResponse.value = n.getCollectionOfObjectValues<ColumnLink>(createColumnLinkFromDiscriminatorValue); },
    }
}
