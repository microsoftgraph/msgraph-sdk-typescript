import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWorkbookPivotTable } from './serializeWorkbookPivotTable';
import { type WorkbookPivotTable } from './workbookPivotTable';
import { type WorkbookPivotTableCollectionResponse } from './workbookPivotTableCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookPivotTableCollectionResponse(writer: SerializationWriter, workbookPivotTableCollectionResponse: WorkbookPivotTableCollectionResponse | undefined = {} as WorkbookPivotTableCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookPivotTableCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookPivotTable>("value", workbookPivotTableCollectionResponse.value, serializeWorkbookPivotTable);
}
