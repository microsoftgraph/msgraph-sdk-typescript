import {createWorkbookApplicationFromDiscriminatorValue} from './createWorkbookApplicationFromDiscriminatorValue';
import {createWorkbookCommentFromDiscriminatorValue} from './createWorkbookCommentFromDiscriminatorValue';
import {createWorkbookFunctionsFromDiscriminatorValue} from './createWorkbookFunctionsFromDiscriminatorValue';
import {createWorkbookNamedItemFromDiscriminatorValue} from './createWorkbookNamedItemFromDiscriminatorValue';
import {createWorkbookOperationFromDiscriminatorValue} from './createWorkbookOperationFromDiscriminatorValue';
import {createWorkbookTableFromDiscriminatorValue} from './createWorkbookTableFromDiscriminatorValue';
import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
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

export function deserializeIntoWorkbook(workbook: Workbook | undefined = {} as Workbook) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbook),
        "application": n => { workbook.application = n.getObjectValue<WorkbookApplication>(createWorkbookApplicationFromDiscriminatorValue); },
        "comments": n => { workbook.comments = n.getCollectionOfObjectValues<WorkbookComment>(createWorkbookCommentFromDiscriminatorValue); },
        "functions": n => { workbook.functions = n.getObjectValue<WorkbookFunctions>(createWorkbookFunctionsFromDiscriminatorValue); },
        "names": n => { workbook.names = n.getCollectionOfObjectValues<WorkbookNamedItem>(createWorkbookNamedItemFromDiscriminatorValue); },
        "operations": n => { workbook.operations = n.getCollectionOfObjectValues<WorkbookOperation>(createWorkbookOperationFromDiscriminatorValue); },
        "tables": n => { workbook.tables = n.getCollectionOfObjectValues<WorkbookTable>(createWorkbookTableFromDiscriminatorValue); },
        "worksheets": n => { workbook.worksheets = n.getCollectionOfObjectValues<WorkbookWorksheet>(createWorkbookWorksheetFromDiscriminatorValue); },
    }
}
