import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookFilterFromDiscriminatorValue} from './createWorkbookFilterFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Json} from './json';
import {serializeJson} from './serializeJson';
import {serializeWorkbookFilter} from './serializeWorkbookFilter';
import {WorkbookFilter} from './workbookFilter';
import {WorkbookTableColumn} from './workbookTableColumn';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableColumn(workbookTableColumn: WorkbookTableColumn | undefined = {} as WorkbookTableColumn) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookTableColumn),
        "filter": n => { workbookTableColumn.filter = n.getObjectValue<WorkbookFilter>(createWorkbookFilterFromDiscriminatorValue); },
        "index": n => { workbookTableColumn.index = n.getNumberValue(); },
        "name": n => { workbookTableColumn.name = n.getStringValue(); },
        "values": n => { workbookTableColumn.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
