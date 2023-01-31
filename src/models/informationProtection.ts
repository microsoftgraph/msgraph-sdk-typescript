import {createBitlockerFromDiscriminatorValue} from './createBitlockerFromDiscriminatorValue';
import {createThreatAssessmentRequestFromDiscriminatorValue} from './createThreatAssessmentRequestFromDiscriminatorValue';
import {Bitlocker, ThreatAssessmentRequest} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InformationProtection implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _bitlocker?: Bitlocker | undefined;
    private _odataType?: string | undefined;
    private _threatAssessmentRequests?: ThreatAssessmentRequest[] | undefined;
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
     * Gets the bitlocker property value. 
     * @returns a bitlocker
     */
    public get bitlocker() {
        return this._bitlocker;
    };
    /**
     * Sets the bitlocker property value. 
     * @param value Value to set for the bitlocker property.
     */
    public set bitlocker(value: Bitlocker | undefined) {
        this._bitlocker = value;
    };
    /**
     * Instantiates a new InformationProtection and sets the default values.
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
            "bitlocker": n => { this.bitlocker = n.getObjectValue<Bitlocker>(createBitlockerFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "threatAssessmentRequests": n => { this.threatAssessmentRequests = n.getCollectionOfObjectValues<ThreatAssessmentRequest>(createThreatAssessmentRequestFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
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
        writer.writeObjectValue<Bitlocker>("bitlocker", this.bitlocker);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<ThreatAssessmentRequest>("threatAssessmentRequests", this.threatAssessmentRequests);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the threatAssessmentRequests property value. 
     * @returns a threatAssessmentRequest
     */
    public get threatAssessmentRequests() {
        return this._threatAssessmentRequests;
    };
    /**
     * Sets the threatAssessmentRequests property value. 
     * @param value Value to set for the threatAssessmentRequests property.
     */
    public set threatAssessmentRequests(value: ThreatAssessmentRequest[] | undefined) {
        this._threatAssessmentRequests = value;
    };
}
