import type {ConditionalAccessPolicyDetail} from './conditionalAccessPolicyDetail';
import type {ConditionalAccessTemplate} from './conditionalAccessTemplate';
import {createConditionalAccessPolicyDetailFromDiscriminatorValue} from './createConditionalAccessPolicyDetailFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeConditionalAccessPolicyDetail} from './serializeConditionalAccessPolicyDetail';
import {TemplateScenarios} from './templateScenarios';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessTemplate(conditionalAccessTemplate: ConditionalAccessTemplate | undefined = {} as ConditionalAccessTemplate) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(conditionalAccessTemplate),
        "description": n => { conditionalAccessTemplate.description = n.getStringValue(); },
        "details": n => { conditionalAccessTemplate.details = n.getObjectValue<ConditionalAccessPolicyDetail>(createConditionalAccessPolicyDetailFromDiscriminatorValue); },
        "name": n => { conditionalAccessTemplate.name = n.getStringValue(); },
        "scenarios": n => { conditionalAccessTemplate.scenarios = n.getEnumValue<TemplateScenarios>(TemplateScenarios); },
    }
}
