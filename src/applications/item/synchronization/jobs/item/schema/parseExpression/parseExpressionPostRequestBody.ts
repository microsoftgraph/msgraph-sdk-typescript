import type {AttributeDefinition} from '../../../../../../../models/attributeDefinition';
import type {ExpressionInputObject} from '../../../../../../../models/expressionInputObject';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ParseExpressionPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The expression property
     */
    expression?: string | undefined;
    /**
     * The targetAttributeDefinition property
     */
    targetAttributeDefinition?: AttributeDefinition | undefined;
    /**
     * The testInputObject property
     */
    testInputObject?: ExpressionInputObject | undefined;
}
