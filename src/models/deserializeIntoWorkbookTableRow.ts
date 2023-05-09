import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Json} from './json';
import {serializeJson} from './serializeJson';
import {WorkbookTableRow} from './workbookTableRow';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableRow(workbookTableRow: WorkbookTableRow | undefined = {} as WorkbookTableRow) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookTableRow),
        "index": n => { workbookTableRow.index = n.getNumberValue(); },
        "values": n => { workbookTableRow.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
