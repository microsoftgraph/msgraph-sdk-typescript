import {createWorkbookChartFromDiscriminatorValue} from './createWorkbookChartFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkbookChart} from './serializeWorkbookChart';
import {WorkbookChart} from './workbookChart';
import {WorkbookChartCollectionResponse} from './workbookChartCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartCollectionResponse(workbookChartCollectionResponse: WorkbookChartCollectionResponse | undefined = {} as WorkbookChartCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookChartCollectionResponse),
        "value": n => { workbookChartCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookChart>(createWorkbookChartFromDiscriminatorValue); },
    }
}
