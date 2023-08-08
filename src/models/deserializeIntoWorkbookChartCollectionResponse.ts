import {createWorkbookChartFromDiscriminatorValue} from './createWorkbookChartFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkbookChart} from './serializeWorkbookChart';
import type {WorkbookChart} from './workbookChart';
import type {WorkbookChartCollectionResponse} from './workbookChartCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartCollectionResponse(workbookChartCollectionResponse: WorkbookChartCollectionResponse | undefined = {} as WorkbookChartCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookChartCollectionResponse),
        "value": n => { workbookChartCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookChart>(createWorkbookChartFromDiscriminatorValue); },
    }
}
