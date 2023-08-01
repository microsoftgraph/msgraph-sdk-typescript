import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookComment} from './serializeWorkbookComment';
import type {WorkbookComment} from './workbookComment';
import type {WorkbookCommentCollectionResponse} from './workbookCommentCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookCommentCollectionResponse(writer: SerializationWriter, workbookCommentCollectionResponse: WorkbookCommentCollectionResponse | undefined = {} as WorkbookCommentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookCommentCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookComment>("value", workbookCommentCollectionResponse.value, serializeWorkbookComment);
}
