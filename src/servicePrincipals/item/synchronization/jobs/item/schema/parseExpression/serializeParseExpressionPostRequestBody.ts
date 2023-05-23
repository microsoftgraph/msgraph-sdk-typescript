import {AttributeDefinition} from '../../../../../../../models/attributeDefinition';
import {ExpressionInputObject} from '../../../../../../../models/expressionInputObject';
import {serializeAttributeDefinition} from '../../../../../../../models/serializeAttributeDefinition';
import {serializeExpressionInputObject} from '../../../../../../../models/serializeExpressionInputObject';
import {ParseExpressionPostRequestBody} from './parseExpressionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParseExpressionPostRequestBody(writer: SerializationWriter, parseExpressionPostRequestBody: ParseExpressionPostRequestBody | undefined = {} as ParseExpressionPostRequestBody) : void {
        writer.writeStringValue("expression", parseExpressionPostRequestBody.expression);
        writer.writeObjectValue<AttributeDefinition>("targetAttributeDefinition", parseExpressionPostRequestBody.targetAttributeDefinition, serializeAttributeDefinition);
        writer.writeObjectValue<ExpressionInputObject>("testInputObject", parseExpressionPostRequestBody.testInputObject, serializeExpressionInputObject);
        writer.writeAdditionalData(parseExpressionPostRequestBody.additionalData);
}
