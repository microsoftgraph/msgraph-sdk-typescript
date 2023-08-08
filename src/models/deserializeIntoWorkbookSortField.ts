import {createWorkbookIconFromDiscriminatorValue} from './createWorkbookIconFromDiscriminatorValue';
import {serializeWorkbookIcon} from './serializeWorkbookIcon';
import type {WorkbookIcon} from './workbookIcon';
import type {WorkbookSortField} from './workbookSortField';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookSortField(workbookSortField: WorkbookSortField | undefined = {} as WorkbookSortField) : Record<string, (node: ParseNode) => void> {
    return {
        "ascending": n => { workbookSortField.ascending = n.getBooleanValue(); },
        "color": n => { workbookSortField.color = n.getStringValue(); },
        "dataOption": n => { workbookSortField.dataOption = n.getStringValue(); },
        "icon": n => { workbookSortField.icon = n.getObjectValue<WorkbookIcon>(createWorkbookIconFromDiscriminatorValue); },
        "key": n => { workbookSortField.key = n.getNumberValue(); },
        "@odata.type": n => { workbookSortField.odataType = n.getStringValue(); },
        "sortOn": n => { workbookSortField.sortOn = n.getStringValue(); },
    }
}
