import { createJsonFromDiscriminatorValue } from './createJsonFromDiscriminatorValue';
import { createWorkbookFilterFromDiscriminatorValue } from './createWorkbookFilterFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Json } from './json';
import { serializeJson } from './serializeJson';
import { serializeWorkbookFilter } from './serializeWorkbookFilter';
import { type WorkbookFilter } from './workbookFilter';
import { type WorkbookTableColumn } from './workbookTableColumn';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableColumn(workbookTableColumn: WorkbookTableColumn | undefined = {} as WorkbookTableColumn) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookTableColumn),
        "filter": n => { workbookTableColumn.filter = n.getObjectValue<WorkbookFilter>(createWorkbookFilterFromDiscriminatorValue); },
        "index": n => { workbookTableColumn.index = n.getNumberValue(); },
        "name": n => { workbookTableColumn.name = n.getStringValue(); },
        "values": n => { workbookTableColumn.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
