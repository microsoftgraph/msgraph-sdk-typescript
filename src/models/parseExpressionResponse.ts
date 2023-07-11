import {AttributeMappingSource} from './attributeMappingSource';
import {PublicError} from './publicError';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ParseExpressionResponse extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Error details, if expression evaluation resulted in an error.
     */
    errorEscaped?: PublicError | undefined;
    /**
     * A collection of values produced by the evaluation of the expression.
     */
    evaluationResult?: string[] | undefined;
    /**
     * true if the evaluation was successful.
     */
    evaluationSucceeded?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * An attributeMappingSource object representing the parsed expression.
     */
    parsedExpression?: AttributeMappingSource | undefined;
    /**
     * true if the expression was parsed successfully.
     */
    parsingSucceeded?: boolean | undefined;
}
