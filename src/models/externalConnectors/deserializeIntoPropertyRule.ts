import {BinaryOperator} from '../binaryOperator';
import {PropertyRule} from './propertyRule';
import {RuleOperation} from './ruleOperation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPropertyRule(propertyRule: PropertyRule | undefined = {} as PropertyRule) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { propertyRule.odataType = n.getStringValue(); },
        "operation": n => { propertyRule.operation = n.getEnumValue<RuleOperation>(RuleOperation); },
        "property": n => { propertyRule.property = n.getStringValue(); },
        "values": n => { propertyRule.values = n.getCollectionOfPrimitiveValues<string>(); },
        "valuesJoinedBy": n => { propertyRule.valuesJoinedBy = n.getEnumValue<BinaryOperator>(BinaryOperator); },
    }
}
