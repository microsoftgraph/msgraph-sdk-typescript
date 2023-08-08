import type {ObjectDefinition} from './objectDefinition';
import type {StringKeyObjectValuePair} from './stringKeyObjectValuePair';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ExpressionInputObject extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Definition of the test object.
     */
    definition?: ObjectDefinition | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Property values of the test object.
     */
    properties?: StringKeyObjectValuePair[] | undefined;
}
