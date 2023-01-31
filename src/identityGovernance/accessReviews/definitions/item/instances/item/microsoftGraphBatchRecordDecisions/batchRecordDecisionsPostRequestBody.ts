import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BatchRecordDecisionsPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _decision?: string | undefined;
    private _justification?: string | undefined;
    private _principalId?: string | undefined;
    private _resourceId?: string | undefined;
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
     * Instantiates a new batchRecordDecisionsPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the decision property value. 
     * @returns a string
     */
    public get decision() {
        return this._decision;
    };
    /**
     * Sets the decision property value. 
     * @param value Value to set for the decision property.
     */
    public set decision(value: string | undefined) {
        this._decision = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "decision": n => { this.decision = n.getStringValue(); },
            "justification": n => { this.justification = n.getStringValue(); },
            "principalId": n => { this.principalId = n.getStringValue(); },
            "resourceId": n => { this.resourceId = n.getStringValue(); },
        };
    };
    /**
     * Gets the justification property value. 
     * @returns a string
     */
    public get justification() {
        return this._justification;
    };
    /**
     * Sets the justification property value. 
     * @param value Value to set for the justification property.
     */
    public set justification(value: string | undefined) {
        this._justification = value;
    };
    /**
     * Gets the principalId property value. 
     * @returns a string
     */
    public get principalId() {
        return this._principalId;
    };
    /**
     * Sets the principalId property value. 
     * @param value Value to set for the principalId property.
     */
    public set principalId(value: string | undefined) {
        this._principalId = value;
    };
    /**
     * Gets the resourceId property value. 
     * @returns a string
     */
    public get resourceId() {
        return this._resourceId;
    };
    /**
     * Sets the resourceId property value. 
     * @param value Value to set for the resourceId property.
     */
    public set resourceId(value: string | undefined) {
        this._resourceId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("decision", this.decision);
        writer.writeStringValue("justification", this.justification);
        writer.writeStringValue("principalId", this.principalId);
        writer.writeStringValue("resourceId", this.resourceId);
        writer.writeAdditionalData(this.additionalData);
    };
}
