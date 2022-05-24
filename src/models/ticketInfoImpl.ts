import {TicketInfo} from './ticketInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TicketInfoImpl implements AdditionalDataHolder, Parsable, TicketInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Ticket number meta data */
    public ticketNumber?: string | undefined;
    /** Ticket system meta data */
    public ticketSystem?: string | undefined;
    /**
     * Instantiates a new ticketInfo and sets the default values.
     * @param ticketInfoParameterValue 
     */
    public constructor(ticketInfoParameterValue?: TicketInfo | undefined) {
        this.additionalData = ticketInfoParameterValue?.additionalData ? ticketInfoParameterValue?.additionalData! : {}
        this.ticketNumber = ticketInfoParameterValue?.ticketNumber ;
        this.ticketSystem = ticketInfoParameterValue?.ticketSystem ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "ticketNumber": n => { this.ticketNumber = n.getStringValue(); },
            "ticketSystem": n => { this.ticketSystem = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.ticketNumber){
        writer.writeStringValue("ticketNumber", this.ticketNumber);
        }
        if(this.ticketSystem){
        writer.writeStringValue("ticketSystem", this.ticketSystem);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
