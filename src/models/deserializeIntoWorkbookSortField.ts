import {createWorkbookIconFromDiscriminatorValue} from './createWorkbookIconFromDiscriminatorValue';
import {serializeWorkbookIcon} from './serializeWorkbookIcon';
import {WorkbookIcon} from './workbookIcon';
import {WorkbookSortField} from './workbookSortField';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
