import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookRangeViewFromDiscriminatorValue} from './createWorkbookRangeViewFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Json} from './json';
import {serializeJson} from './serializeJson';
import {serializeWorkbookRangeView} from './serializeWorkbookRangeView';
import {WorkbookRangeView} from './workbookRangeView';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeView(workbookRangeView: WorkbookRangeView | undefined = {} as WorkbookRangeView) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeView),
        "cellAddresses": n => { workbookRangeView.cellAddresses = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "columnCount": n => { workbookRangeView.columnCount = n.getNumberValue(); },
        "formulas": n => { workbookRangeView.formulas = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "formulasLocal": n => { workbookRangeView.formulasLocal = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "formulasR1C1": n => { workbookRangeView.formulasR1C1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "index": n => { workbookRangeView.index = n.getNumberValue(); },
        "numberFormat": n => { workbookRangeView.numberFormat = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rowCount": n => { workbookRangeView.rowCount = n.getNumberValue(); },
        "rows": n => { workbookRangeView.rows = n.getCollectionOfObjectValues<WorkbookRangeView>(createWorkbookRangeViewFromDiscriminatorValue); },
        "text": n => { workbookRangeView.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { workbookRangeView.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "valueTypes": n => { workbookRangeView.valueTypes = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
