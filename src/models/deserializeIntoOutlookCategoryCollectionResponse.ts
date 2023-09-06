import { createOutlookCategoryFromDiscriminatorValue } from './createOutlookCategoryFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type OutlookCategory } from './outlookCategory';
import { type OutlookCategoryCollectionResponse } from './outlookCategoryCollectionResponse';
import { serializeOutlookCategory } from './serializeOutlookCategory';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookCategoryCollectionResponse(outlookCategoryCollectionResponse: OutlookCategoryCollectionResponse | undefined = {} as OutlookCategoryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(outlookCategoryCollectionResponse),
        "value": n => { outlookCategoryCollectionResponse.value = n.getCollectionOfObjectValues<OutlookCategory>(createOutlookCategoryFromDiscriminatorValue); },
    }
}
