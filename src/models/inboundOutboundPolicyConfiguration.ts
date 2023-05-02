import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InboundOutboundPolicyConfiguration extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The inboundAllowed property */
    inboundAllowed?: boolean | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The outboundAllowed property */
    outboundAllowed?: boolean | undefined;
}
