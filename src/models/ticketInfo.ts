import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TicketInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The ticket number. */
    private _ticketNumber?: string | undefined;
    /** The description of the ticket system. */
    private _ticketSystem?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new ticketInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "ticketNumber": n => { this.ticketNumber = n.getStringValue(); },
            "ticketSystem": n => { this.ticketSystem = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("ticketNumber", this.ticketNumber);
        writer.writeStringValue("ticketSystem", this.ticketSystem);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the ticketNumber property value. The ticket number.
     * @returns a string
     */
    public get ticketNumber() {
        return this._ticketNumber;
    };
    /**
     * Sets the ticketNumber property value. The ticket number.
     * @param value Value to set for the ticketNumber property.
     */
    public set ticketNumber(value: string | undefined) {
        this._ticketNumber = value;
    };
    /**
     * Gets the ticketSystem property value. The description of the ticket system.
     * @returns a string
     */
    public get ticketSystem() {
        return this._ticketSystem;
    };
    /**
     * Sets the ticketSystem property value. The description of the ticket system.
     * @param value Value to set for the ticketSystem property.
     */
    public set ticketSystem(value: string | undefined) {
        this._ticketSystem = value;
    };
}
