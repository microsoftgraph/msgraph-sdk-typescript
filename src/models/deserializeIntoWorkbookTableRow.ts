import { createJsonFromDiscriminatorValue } from './createJsonFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Json } from './json';
import { serializeJson } from './serializeJson';
import { type WorkbookTableRow } from './workbookTableRow';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableRow(workbookTableRow: WorkbookTableRow | undefined = {} as WorkbookTableRow) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookTableRow),
        "index": n => { workbookTableRow.index = n.getNumberValue(); },
        "values": n => { workbookTableRow.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
