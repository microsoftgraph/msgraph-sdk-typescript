import {createWorkbookChartFillFromDiscriminatorValue} from './createWorkbookChartFillFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import type {WorkbookChartFill} from './workbookChartFill';
import type {WorkbookChartPointFormat} from './workbookChartPointFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartPointFormat(workbookChartPointFormat: WorkbookChartPointFormat | undefined = {} as WorkbookChartPointFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartPointFormat),
        "fill": n => { workbookChartPointFormat.fill = n.getObjectValue<WorkbookChartFill>(createWorkbookChartFillFromDiscriminatorValue); },
    }
}
