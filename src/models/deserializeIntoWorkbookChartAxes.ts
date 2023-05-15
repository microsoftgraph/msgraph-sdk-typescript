import {createWorkbookChartAxisFromDiscriminatorValue} from './createWorkbookChartAxisFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookChartAxis} from './serializeWorkbookChartAxis';
import {WorkbookChartAxes} from './workbookChartAxes';
import {WorkbookChartAxis} from './workbookChartAxis';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartAxes(workbookChartAxes: WorkbookChartAxes | undefined = {} as WorkbookChartAxes) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartAxes),
        "categoryAxis": n => { workbookChartAxes.categoryAxis = n.getObjectValue<WorkbookChartAxis>(createWorkbookChartAxisFromDiscriminatorValue); },
        "seriesAxis": n => { workbookChartAxes.seriesAxis = n.getObjectValue<WorkbookChartAxis>(createWorkbookChartAxisFromDiscriminatorValue); },
        "valueAxis": n => { workbookChartAxes.valueAxis = n.getObjectValue<WorkbookChartAxis>(createWorkbookChartAxisFromDiscriminatorValue); },
    }
}
