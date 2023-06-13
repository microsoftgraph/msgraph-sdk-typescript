import {ObjectDefinition} from './objectDefinition';
import {StringKeyObjectValuePair} from './stringKeyObjectValuePair';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ExpressionInputObject extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The definition property */
    definition?: ObjectDefinition | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The properties property */
    properties?: StringKeyObjectValuePair[] | undefined;
}
