import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWorkbookComment } from './serializeWorkbookComment';
import { type WorkbookComment } from './workbookComment';
import { type WorkbookCommentCollectionResponse } from './workbookCommentCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookCommentCollectionResponse(writer: SerializationWriter, workbookCommentCollectionResponse: WorkbookCommentCollectionResponse | undefined = {} as WorkbookCommentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookCommentCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookComment>("value", workbookCommentCollectionResponse.value, serializeWorkbookComment);
}
