import {Json} from './json';
import {serializeJson} from './serializeJson';
import {serializeWorkbookIcon} from './serializeWorkbookIcon';
import {WorkbookFilterCriteria} from './workbookFilterCriteria';
import {WorkbookIcon} from './workbookIcon';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookFilterCriteria(writer: SerializationWriter, workbookFilterCriteria: WorkbookFilterCriteria | undefined = {} as WorkbookFilterCriteria) : void {
        writer.writeStringValue("color", workbookFilterCriteria.color);
        writer.writeStringValue("criterion1", workbookFilterCriteria.criterion1);
        writer.writeStringValue("criterion2", workbookFilterCriteria.criterion2);
        writer.writeStringValue("dynamicCriteria", workbookFilterCriteria.dynamicCriteria);
        writer.writeStringValue("filterOn", workbookFilterCriteria.filterOn);
        writer.writeObjectValue<WorkbookIcon>("icon", workbookFilterCriteria.icon, serializeWorkbookIcon);
        writer.writeStringValue("@odata.type", workbookFilterCriteria.odataType);
        writer.writeStringValue("operator", workbookFilterCriteria.operator);
        writer.writeObjectValue<Json>("values", workbookFilterCriteria.values, serializeJson);
        writer.writeAdditionalData(workbookFilterCriteria.additionalData);
}
