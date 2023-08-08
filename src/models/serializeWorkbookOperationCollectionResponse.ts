import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookOperation} from './serializeWorkbookOperation';
import type {WorkbookOperation} from './workbookOperation';
import type {WorkbookOperationCollectionResponse} from './workbookOperationCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookOperationCollectionResponse(writer: SerializationWriter, workbookOperationCollectionResponse: WorkbookOperationCollectionResponse | undefined = {} as WorkbookOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookOperation>("value", workbookOperationCollectionResponse.value, serializeWorkbookOperation);
}
