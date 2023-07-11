import {WeakAlgorithms} from './weakAlgorithms';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RequestSignatureVerification extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Specifies which weak algorithms are allowed.  The possible values are: rsaSha1, unknownFutureValue.
     */
    allowedWeakAlgorithms?: WeakAlgorithms | undefined;
    /**
     * Specifies whether signed authentication requests for this application should be required.
     */
    isSignedRequestRequired?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
