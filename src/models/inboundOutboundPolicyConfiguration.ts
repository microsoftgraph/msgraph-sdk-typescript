import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InboundOutboundPolicyConfiguration extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Defines whether external users coming inbound are allowed.
     */
    inboundAllowed?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Defines whether internal users are allowed to go outbound.
     */
    outboundAllowed?: boolean | undefined;
}
