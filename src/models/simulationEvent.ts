import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SimulationEvent implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Count of the simulation event occurrence in an attack simulation and training campaign. */
    private _count?: number | undefined;
    /** Name of the simulation event in an attack simulation and training campaign. */
    private _eventName?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
     * Instantiates a new simulationEvent and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.simulationEvent";
    };
    /**
     * Gets the count property value. Count of the simulation event occurrence in an attack simulation and training campaign.
     * @returns a integer
     */
    public get count() {
        return this._count;
    };
    /**
     * Sets the count property value. Count of the simulation event occurrence in an attack simulation and training campaign.
     * @param value Value to set for the count property.
     */
    public set count(value: number | undefined) {
        this._count = value;
    };
    /**
     * Gets the eventName property value. Name of the simulation event in an attack simulation and training campaign.
     * @returns a string
     */
    public get eventName() {
        return this._eventName;
    };
    /**
     * Sets the eventName property value. Name of the simulation event in an attack simulation and training campaign.
     * @param value Value to set for the eventName property.
     */
    public set eventName(value: string | undefined) {
        this._eventName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "count": n => { this.count = n.getNumberValue(); },
            "eventName": n => { this.eventName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
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
        writer.writeNumberValue("count", this.count);
        writer.writeStringValue("eventName", this.eventName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
