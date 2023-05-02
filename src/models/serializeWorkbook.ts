import {serializeEntity} from './serializeEntity';
import {serializeWorkbookApplication} from './serializeWorkbookApplication';
import {serializeWorkbookComment} from './serializeWorkbookComment';
import {serializeWorkbookFunctions} from './serializeWorkbookFunctions';
import {serializeWorkbookNamedItem} from './serializeWorkbookNamedItem';
import {serializeWorkbookOperation} from './serializeWorkbookOperation';
import {serializeWorkbookTable} from './serializeWorkbookTable';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {Workbook} from './workbook';
import {WorkbookApplication} from './workbookApplication';
import {WorkbookComment} from './workbookComment';
import {WorkbookFunctions} from './workbookFunctions';
import {WorkbookNamedItem} from './workbookNamedItem';
import {WorkbookOperation} from './workbookOperation';
import {WorkbookTable} from './workbookTable';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbook(writer: SerializationWriter, workbook: Workbook | undefined = {} as Workbook) : void {
        serializeEntity(writer, workbook)
        writer.writeObjectValue<WorkbookApplication>("application", workbook.application, serializeWorkbookApplication);
        writer.writeCollectionOfObjectValues<WorkbookComment>("comments", workbook.comments, serializeWorkbookComment);
        writer.writeObjectValue<WorkbookFunctions>("functions", workbook.functions, serializeWorkbookFunctions);
        writer.writeCollectionOfObjectValues<WorkbookNamedItem>("names", workbook.names, serializeWorkbookNamedItem);
        writer.writeCollectionOfObjectValues<WorkbookOperation>("operations", workbook.operations, serializeWorkbookOperation);
        writer.writeCollectionOfObjectValues<WorkbookTable>("tables", workbook.tables, serializeWorkbookTable);
        writer.writeCollectionOfObjectValues<WorkbookWorksheet>("worksheets", workbook.worksheets, serializeWorkbookWorksheet);
}
