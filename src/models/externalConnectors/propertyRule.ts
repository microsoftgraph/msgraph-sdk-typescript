import {BinaryOperator} from '../binaryOperator';
import {RuleOperation} from './ruleOperation';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PropertyRule extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The operation property
     */
    operation?: RuleOperation | undefined;
    /**
     * The property from the externalItem schema. Required.
     */
    property?: string | undefined;
    /**
     * A collection with one or many strings. The specified string(s) will be matched with the specified property using the specified operation. Required.
     */
    values?: string[] | undefined;
    /**
     * The valuesJoinedBy property
     */
    valuesJoinedBy?: BinaryOperator | undefined;
}
