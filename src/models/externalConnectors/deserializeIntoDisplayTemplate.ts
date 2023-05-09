import {createJsonFromDiscriminatorValue} from '../createJsonFromDiscriminatorValue';
import {Json} from '../json';
import {serializeJson} from '../serializeJson';
import {createPropertyRuleFromDiscriminatorValue} from './createPropertyRuleFromDiscriminatorValue';
import {DisplayTemplate} from './displayTemplate';
import {PropertyRule} from './propertyRule';
import {serializePropertyRule} from './serializePropertyRule';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDisplayTemplate(displayTemplate: DisplayTemplate | undefined = {} as DisplayTemplate) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { displayTemplate.id = n.getStringValue(); },
        "layout": n => { displayTemplate.layout = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "@odata.type": n => { displayTemplate.odataType = n.getStringValue(); },
        "priority": n => { displayTemplate.priority = n.getNumberValue(); },
        "rules": n => { displayTemplate.rules = n.getCollectionOfObjectValues<PropertyRule>(createPropertyRuleFromDiscriminatorValue); },
    }
}
