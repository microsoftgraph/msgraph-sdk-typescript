import {Json} from '../json';
import {serializeJson} from '../serializeJson';
import {DisplayTemplate} from './displayTemplate';
import {PropertyRule} from './propertyRule';
import {serializePropertyRule} from './serializePropertyRule';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDisplayTemplate(writer: SerializationWriter, displayTemplate: DisplayTemplate | undefined = {} as DisplayTemplate) : void {
        writer.writeStringValue("id", displayTemplate.id);
        writer.writeObjectValue<Json>("layout", displayTemplate.layout, serializeJson);
        writer.writeStringValue("@odata.type", displayTemplate.odataType);
        writer.writeNumberValue("priority", displayTemplate.priority);
        writer.writeCollectionOfObjectValues<PropertyRule>("rules", displayTemplate.rules, serializePropertyRule);
        writer.writeAdditionalData(displayTemplate.additionalData);
}
