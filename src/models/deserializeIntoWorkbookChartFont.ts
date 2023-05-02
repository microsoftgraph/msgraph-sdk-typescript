import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookChartFont} from './workbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartFont(workbookChartFont: WorkbookChartFont | undefined = {} as WorkbookChartFont) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartFont),
        "bold": n => { workbookChartFont.bold = n.getBooleanValue(); },
        "color": n => { workbookChartFont.color = n.getStringValue(); },
        "italic": n => { workbookChartFont.italic = n.getBooleanValue(); },
        "name": n => { workbookChartFont.name = n.getStringValue(); },
        "size": n => { workbookChartFont.size = n.getNumberValue(); },
        "underline": n => { workbookChartFont.underline = n.getStringValue(); },
    }
}
