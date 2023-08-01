import type {RecentNotebook} from '../../../../../../../models/recentNotebook';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeRecentNotebook} from '../../../../../../../models/serializeRecentNotebook';
import type {GetRecentNotebooksWithIncludePersonalNotebooksResponse} from './getRecentNotebooksWithIncludePersonalNotebooksResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetRecentNotebooksWithIncludePersonalNotebooksResponse(writer: SerializationWriter, getRecentNotebooksWithIncludePersonalNotebooksResponse: GetRecentNotebooksWithIncludePersonalNotebooksResponse | undefined = {} as GetRecentNotebooksWithIncludePersonalNotebooksResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getRecentNotebooksWithIncludePersonalNotebooksResponse)
        writer.writeCollectionOfObjectValues<RecentNotebook>("value", getRecentNotebooksWithIncludePersonalNotebooksResponse.value, serializeRecentNotebook);
}
