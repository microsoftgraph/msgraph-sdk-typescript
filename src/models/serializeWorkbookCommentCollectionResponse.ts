import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookComment} from './serializeWorkbookComment';
import {WorkbookComment} from './workbookComment';
import {WorkbookCommentCollectionResponse} from './workbookCommentCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookCommentCollectionResponse(writer: SerializationWriter, workbookCommentCollectionResponse: WorkbookCommentCollectionResponse | undefined = {} as WorkbookCommentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookCommentCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookComment>("value", workbookCommentCollectionResponse.value, serializeWorkbookComment);
}
