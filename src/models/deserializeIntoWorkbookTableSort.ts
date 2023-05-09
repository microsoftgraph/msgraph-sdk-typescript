import {createWorkbookSortFieldFromDiscriminatorValue} from './createWorkbookSortFieldFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookSortField} from './serializeWorkbookSortField';
import {WorkbookSortField} from './workbookSortField';
import {WorkbookTableSort} from './workbookTableSort';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableSort(workbookTableSort: WorkbookTableSort | undefined = {} as WorkbookTableSort) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookTableSort),
        "fields": n => { workbookTableSort.fields = n.getCollectionOfObjectValues<WorkbookSortField>(createWorkbookSortFieldFromDiscriminatorValue); },
        "matchCase": n => { workbookTableSort.matchCase = n.getBooleanValue(); },
        "method": n => { workbookTableSort.method = n.getStringValue(); },
    }
}
