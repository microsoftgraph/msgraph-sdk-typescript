import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookRangeFont} from './workbookRangeFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeFont(workbookRangeFont: WorkbookRangeFont | undefined = {} as WorkbookRangeFont) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeFont),
        "bold": n => { workbookRangeFont.bold = n.getBooleanValue(); },
        "color": n => { workbookRangeFont.color = n.getStringValue(); },
        "italic": n => { workbookRangeFont.italic = n.getBooleanValue(); },
        "name": n => { workbookRangeFont.name = n.getStringValue(); },
        "size": n => { workbookRangeFont.size = n.getNumberValue(); },
        "underline": n => { workbookRangeFont.underline = n.getStringValue(); },
    }
}
