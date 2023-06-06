import {AttributeMappingSource} from './attributeMappingSource';
import {PublicError} from './publicError';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ParseExpressionResponse extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The error property */
    errorEscaped?: PublicError | undefined;
    /** The evaluationResult property */
    evaluationResult?: string[] | undefined;
    /** The evaluationSucceeded property */
    evaluationSucceeded?: boolean | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The parsedExpression property */
    parsedExpression?: AttributeMappingSource | undefined;
    /** The parsingSucceeded property */
    parsingSucceeded?: boolean | undefined;
}
