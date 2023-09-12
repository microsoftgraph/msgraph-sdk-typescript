import { createRecentNotebookFromDiscriminatorValue } from '../../../../../models/createRecentNotebookFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type RecentNotebook } from '../../../../../models/recentNotebook';
import { serializeRecentNotebook } from '../../../../../models/serializeRecentNotebook';
import { type GetRecentNotebooksWithIncludePersonalNotebooksResponse } from './getRecentNotebooksWithIncludePersonalNotebooksResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetRecentNotebooksWithIncludePersonalNotebooksResponse(getRecentNotebooksWithIncludePersonalNotebooksResponse: GetRecentNotebooksWithIncludePersonalNotebooksResponse | undefined = {} as GetRecentNotebooksWithIncludePersonalNotebooksResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getRecentNotebooksWithIncludePersonalNotebooksResponse),
        "value": n => { getRecentNotebooksWithIncludePersonalNotebooksResponse.value = n.getCollectionOfObjectValues<RecentNotebook>(createRecentNotebookFromDiscriminatorValue); },
    }
}
