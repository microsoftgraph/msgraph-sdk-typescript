import { createJsonFromDiscriminatorValue } from './createJsonFromDiscriminatorValue';
import { createWorkbookWorksheetFromDiscriminatorValue } from './createWorkbookWorksheetFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Json } from './json';
import { serializeJson } from './serializeJson';
import { serializeWorkbookWorksheet } from './serializeWorkbookWorksheet';
import { type WorkbookNamedItem } from './workbookNamedItem';
import { type WorkbookWorksheet } from './workbookWorksheet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookNamedItem(workbookNamedItem: WorkbookNamedItem | undefined = {} as WorkbookNamedItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookNamedItem),
        "comment": n => { workbookNamedItem.comment = n.getStringValue(); },
        "name": n => { workbookNamedItem.name = n.getStringValue(); },
        "scope": n => { workbookNamedItem.scope = n.getStringValue(); },
        "type": n => { workbookNamedItem.type = n.getStringValue(); },
        "value": n => { workbookNamedItem.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "visible": n => { workbookNamedItem.visible = n.getBooleanValue(); },
        "worksheet": n => { workbookNamedItem.worksheet = n.getObjectValue<WorkbookWorksheet>(createWorkbookWorksheetFromDiscriminatorValue); },
    }
}
