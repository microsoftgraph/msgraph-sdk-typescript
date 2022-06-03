import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TicketInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Ticket number meta data */
    ticketNumber?: string | undefined;
    /** Ticket system meta data */
    ticketSystem?: string | undefined;
}
