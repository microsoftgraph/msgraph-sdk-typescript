import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the batchRecordDecisions method.  */
export class BatchRecordDecisionsRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The decision property  */
    private _decision?: string | undefined;
    /** The justification property  */
    private _justification?: string | undefined;
    /** The principalId property  */
    private _principalId?: string | undefined;
    /** The resourceId property  */
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
     * Instantiates a new batchRecordDecisionsRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the decision property value. The decision property
     * @returns a string
     */
    public get decision() {
        return this._decision;
    };
    /**
     * Sets the decision property value. The decision property
     * @param value Value to set for the decision property.
     */
    public set decision(value: string | undefined) {
        this._decision = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "decision": (o, n) => { (o as unknown as BatchRecordDecisionsRequestBody).decision = n.getStringValue(); },
            "justification": (o, n) => { (o as unknown as BatchRecordDecisionsRequestBody).justification = n.getStringValue(); },
            "principalId": (o, n) => { (o as unknown as BatchRecordDecisionsRequestBody).principalId = n.getStringValue(); },
            "resourceId": (o, n) => { (o as unknown as BatchRecordDecisionsRequestBody).resourceId = n.getStringValue(); },
        };
    };
    /**
     * Gets the justification property value. The justification property
     * @returns a string
     */
    public get justification() {
        return this._justification;
    };
    /**
     * Sets the justification property value. The justification property
     * @param value Value to set for the justification property.
     */
    public set justification(value: string | undefined) {
        this._justification = value;
    };
    /**
     * Gets the principalId property value. The principalId property
     * @returns a string
     */
    public get principalId() {
        return this._principalId;
    };
    /**
     * Sets the principalId property value. The principalId property
     * @param value Value to set for the principalId property.
     */
    public set principalId(value: string | undefined) {
        this._principalId = value;
    };
    /**
     * Gets the resourceId property value. The resourceId property
     * @returns a string
     */
    public get resourceId() {
        return this._resourceId;
    };
    /**
     * Sets the resourceId property value. The resourceId property
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
