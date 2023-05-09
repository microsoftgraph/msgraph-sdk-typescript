import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookIconFromDiscriminatorValue} from './createWorkbookIconFromDiscriminatorValue';
import {Json} from './json';
import {serializeJson} from './serializeJson';
import {serializeWorkbookIcon} from './serializeWorkbookIcon';
import {WorkbookFilterCriteria} from './workbookFilterCriteria';
import {WorkbookIcon} from './workbookIcon';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookFilterCriteria(workbookFilterCriteria: WorkbookFilterCriteria | undefined = {} as WorkbookFilterCriteria) : Record<string, (node: ParseNode) => void> {
    return {
        "color": n => { workbookFilterCriteria.color = n.getStringValue(); },
        "criterion1": n => { workbookFilterCriteria.criterion1 = n.getStringValue(); },
        "criterion2": n => { workbookFilterCriteria.criterion2 = n.getStringValue(); },
        "dynamicCriteria": n => { workbookFilterCriteria.dynamicCriteria = n.getStringValue(); },
        "filterOn": n => { workbookFilterCriteria.filterOn = n.getStringValue(); },
        "icon": n => { workbookFilterCriteria.icon = n.getObjectValue<WorkbookIcon>(createWorkbookIconFromDiscriminatorValue); },
        "@odata.type": n => { workbookFilterCriteria.odataType = n.getStringValue(); },
        "operator": n => { workbookFilterCriteria.operator = n.getStringValue(); },
        "values": n => { workbookFilterCriteria.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
