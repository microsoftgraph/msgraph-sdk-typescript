import {BinaryOperator} from '../binaryOperator';
import {PropertyRule} from './propertyRule';
import {RuleOperation} from './ruleOperation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePropertyRule(writer: SerializationWriter, propertyRule: PropertyRule | undefined = {} as PropertyRule) : void {
        writer.writeStringValue("@odata.type", propertyRule.odataType);
        writer.writeEnumValue<RuleOperation>("operation", propertyRule.operation);
        writer.writeStringValue("property", propertyRule.property);
        writer.writeCollectionOfPrimitiveValues<string>("values", propertyRule.values);
        writer.writeEnumValue<BinaryOperator>("valuesJoinedBy", propertyRule.valuesJoinedBy);
        writer.writeAdditionalData(propertyRule.additionalData);
}
