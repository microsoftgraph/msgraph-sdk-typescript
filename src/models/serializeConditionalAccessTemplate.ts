import {ConditionalAccessPolicyDetail} from './conditionalAccessPolicyDetail';
import {ConditionalAccessTemplate} from './conditionalAccessTemplate';
import {serializeConditionalAccessPolicyDetail} from './serializeConditionalAccessPolicyDetail';
import {serializeEntity} from './serializeEntity';
import {TemplateScenarios} from './templateScenarios';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessTemplate(writer: SerializationWriter, conditionalAccessTemplate: ConditionalAccessTemplate | undefined = {} as ConditionalAccessTemplate) : void {
        serializeEntity(writer, conditionalAccessTemplate)
        writer.writeStringValue("description", conditionalAccessTemplate.description);
        writer.writeObjectValue<ConditionalAccessPolicyDetail>("details", conditionalAccessTemplate.details, serializeConditionalAccessPolicyDetail);
        writer.writeStringValue("name", conditionalAccessTemplate.name);
        writer.writeEnumValue<TemplateScenarios>("scenarios", conditionalAccessTemplate.scenarios);
}
