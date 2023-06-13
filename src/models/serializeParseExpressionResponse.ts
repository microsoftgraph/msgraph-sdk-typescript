import {AttributeMappingSource} from './attributeMappingSource';
import {ParseExpressionResponse} from './parseExpressionResponse';
import {PublicError} from './publicError';
import {serializeAttributeMappingSource} from './serializeAttributeMappingSource';
import {serializePublicError} from './serializePublicError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParseExpressionResponse(writer: SerializationWriter, parseExpressionResponse: ParseExpressionResponse | undefined = {} as ParseExpressionResponse) : void {
        writer.writeObjectValue<PublicError>("error", parseExpressionResponse.errorEscaped, serializePublicError);
        writer.writeCollectionOfPrimitiveValues<string>("evaluationResult", parseExpressionResponse.evaluationResult);
        writer.writeBooleanValue("evaluationSucceeded", parseExpressionResponse.evaluationSucceeded);
        writer.writeStringValue("@odata.type", parseExpressionResponse.odataType);
        writer.writeObjectValue<AttributeMappingSource>("parsedExpression", parseExpressionResponse.parsedExpression, serializeAttributeMappingSource);
        writer.writeBooleanValue("parsingSucceeded", parseExpressionResponse.parsingSucceeded);
        writer.writeAdditionalData(parseExpressionResponse.additionalData);
}
