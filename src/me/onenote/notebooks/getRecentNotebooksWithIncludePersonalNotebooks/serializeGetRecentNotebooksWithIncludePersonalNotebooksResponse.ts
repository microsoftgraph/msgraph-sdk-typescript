import {RecentNotebook} from '../../../../models/recentNotebook';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeRecentNotebook} from '../../../../models/serializeRecentNotebook';
import {GetRecentNotebooksWithIncludePersonalNotebooksResponse} from './getRecentNotebooksWithIncludePersonalNotebooksResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetRecentNotebooksWithIncludePersonalNotebooksResponse(getRecentNotebooksWithIncludePersonalNotebooksResponse: GetRecentNotebooksWithIncludePersonalNotebooksResponse | undefined = {} as GetRecentNotebooksWithIncludePersonalNotebooksResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getRecentNotebooksWithIncludePersonalNotebooksResponse)
        writer.writeCollectionOfObjectValues<RecentNotebook>("value", getRecentNotebooksWithIncludePersonalNotebooksResponse.value, serializeRecentNotebook);
}
