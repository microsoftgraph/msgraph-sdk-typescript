import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TicketInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The ticket number.
     */
    ticketNumber?: string | undefined;
    /**
     * The description of the ticket system.
     */
    ticketSystem?: string | undefined;
}
