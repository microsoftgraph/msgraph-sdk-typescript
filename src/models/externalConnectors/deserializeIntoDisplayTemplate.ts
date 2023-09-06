import { createJsonFromDiscriminatorValue } from '../createJsonFromDiscriminatorValue';
import { type Json } from '../json';
import { serializeJson } from '../serializeJson';
import { createPropertyRuleFromDiscriminatorValue } from './createPropertyRuleFromDiscriminatorValue';
import { type DisplayTemplate } from './displayTemplate';
import { type PropertyRule } from './propertyRule';
import { serializePropertyRule } from './serializePropertyRule';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDisplayTemplate(displayTemplate: DisplayTemplate | undefined = {} as DisplayTemplate) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { displayTemplate.id = n.getStringValue(); },
        "layout": n => { displayTemplate.layout = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "@odata.type": n => { displayTemplate.odataType = n.getStringValue(); },
        "priority": n => { displayTemplate.priority = n.getNumberValue(); },
        "rules": n => { displayTemplate.rules = n.getCollectionOfObjectValues<PropertyRule>(createPropertyRuleFromDiscriminatorValue); },
    }
}
