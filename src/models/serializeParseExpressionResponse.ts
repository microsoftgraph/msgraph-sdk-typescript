import { type AttributeMappingSource } from './attributeMappingSource';
import { type ParseExpressionResponse } from './parseExpressionResponse';
import { type PublicError } from './publicError';
import { serializeAttributeMappingSource } from './serializeAttributeMappingSource';
import { serializePublicError } from './serializePublicError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeParseExpressionResponse(writer: SerializationWriter, parseExpressionResponse: ParseExpressionResponse | undefined = {} as ParseExpressionResponse) : void {
        writer.writeObjectValue<PublicError>("error", parseExpressionResponse.errorEscaped, serializePublicError);
        writer.writeCollectionOfPrimitiveValues<string>("evaluationResult", parseExpressionResponse.evaluationResult);
        writer.writeBooleanValue("evaluationSucceeded", parseExpressionResponse.evaluationSucceeded);
        writer.writeStringValue("@odata.type", parseExpressionResponse.odataType);
        writer.writeObjectValue<AttributeMappingSource>("parsedExpression", parseExpressionResponse.parsedExpression, serializeAttributeMappingSource);
        writer.writeBooleanValue("parsingSucceeded", parseExpressionResponse.parsingSucceeded);
        writer.writeAdditionalData(parseExpressionResponse.additionalData);
}
