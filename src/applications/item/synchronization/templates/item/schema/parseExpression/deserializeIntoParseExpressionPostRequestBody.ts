import type {AttributeDefinition} from '../../../../../../../models/attributeDefinition';
import {createAttributeDefinitionFromDiscriminatorValue} from '../../../../../../../models/createAttributeDefinitionFromDiscriminatorValue';
import {createExpressionInputObjectFromDiscriminatorValue} from '../../../../../../../models/createExpressionInputObjectFromDiscriminatorValue';
import type {ExpressionInputObject} from '../../../../../../../models/expressionInputObject';
import {serializeAttributeDefinition} from '../../../../../../../models/serializeAttributeDefinition';
import {serializeExpressionInputObject} from '../../../../../../../models/serializeExpressionInputObject';
import type {ParseExpressionPostRequestBody} from './parseExpressionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParseExpressionPostRequestBody(parseExpressionPostRequestBody: ParseExpressionPostRequestBody | undefined = {} as ParseExpressionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "expression": n => { parseExpressionPostRequestBody.expression = n.getStringValue(); },
        "targetAttributeDefinition": n => { parseExpressionPostRequestBody.targetAttributeDefinition = n.getObjectValue<AttributeDefinition>(createAttributeDefinitionFromDiscriminatorValue); },
        "testInputObject": n => { parseExpressionPostRequestBody.testInputObject = n.getObjectValue<ExpressionInputObject>(createExpressionInputObjectFromDiscriminatorValue); },
    }
}
