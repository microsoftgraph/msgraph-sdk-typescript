import type {AttributeMappingSource} from './attributeMappingSource';
import {createAttributeMappingSourceFromDiscriminatorValue} from './createAttributeMappingSourceFromDiscriminatorValue';
import {createPublicErrorFromDiscriminatorValue} from './createPublicErrorFromDiscriminatorValue';
import type {ParseExpressionResponse} from './parseExpressionResponse';
import type {PublicError} from './publicError';
import {serializeAttributeMappingSource} from './serializeAttributeMappingSource';
import {serializePublicError} from './serializePublicError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParseExpressionResponse(parseExpressionResponse: ParseExpressionResponse | undefined = {} as ParseExpressionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { parseExpressionResponse.errorEscaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); },
        "evaluationResult": n => { parseExpressionResponse.evaluationResult = n.getCollectionOfPrimitiveValues<string>(); },
        "evaluationSucceeded": n => { parseExpressionResponse.evaluationSucceeded = n.getBooleanValue(); },
        "@odata.type": n => { parseExpressionResponse.odataType = n.getStringValue(); },
        "parsedExpression": n => { parseExpressionResponse.parsedExpression = n.getObjectValue<AttributeMappingSource>(createAttributeMappingSourceFromDiscriminatorValue); },
        "parsingSucceeded": n => { parseExpressionResponse.parsingSucceeded = n.getBooleanValue(); },
    }
}
