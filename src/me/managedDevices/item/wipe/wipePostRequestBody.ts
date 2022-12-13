import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the wipe method.
 */
export class WipePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The keepEnrollmentData property */
    private _keepEnrollmentData?: boolean | undefined;
    /** The keepUserData property */
    private _keepUserData?: boolean | undefined;
    /** The macOsUnlockCode property */
    private _macOsUnlockCode?: string | undefined;
    /** The persistEsimDataPlan property */
    private _persistEsimDataPlan?: boolean | undefined;
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
     * Instantiates a new wipePostRequestBody and sets the default values.
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
            "keepEnrollmentData": n => { this.keepEnrollmentData = n.getBooleanValue(); },
            "keepUserData": n => { this.keepUserData = n.getBooleanValue(); },
            "macOsUnlockCode": n => { this.macOsUnlockCode = n.getStringValue(); },
            "persistEsimDataPlan": n => { this.persistEsimDataPlan = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the keepEnrollmentData property value. The keepEnrollmentData property
     * @returns a boolean
     */
    public get keepEnrollmentData() {
        return this._keepEnrollmentData;
    };
    /**
     * Sets the keepEnrollmentData property value. The keepEnrollmentData property
     * @param value Value to set for the keepEnrollmentData property.
     */
    public set keepEnrollmentData(value: boolean | undefined) {
        this._keepEnrollmentData = value;
    };
    /**
     * Gets the keepUserData property value. The keepUserData property
     * @returns a boolean
     */
    public get keepUserData() {
        return this._keepUserData;
    };
    /**
     * Sets the keepUserData property value. The keepUserData property
     * @param value Value to set for the keepUserData property.
     */
    public set keepUserData(value: boolean | undefined) {
        this._keepUserData = value;
    };
    /**
     * Gets the macOsUnlockCode property value. The macOsUnlockCode property
     * @returns a string
     */
    public get macOsUnlockCode() {
        return this._macOsUnlockCode;
    };
    /**
     * Sets the macOsUnlockCode property value. The macOsUnlockCode property
     * @param value Value to set for the macOsUnlockCode property.
     */
    public set macOsUnlockCode(value: string | undefined) {
        this._macOsUnlockCode = value;
    };
    /**
     * Gets the persistEsimDataPlan property value. The persistEsimDataPlan property
     * @returns a boolean
     */
    public get persistEsimDataPlan() {
        return this._persistEsimDataPlan;
    };
    /**
     * Sets the persistEsimDataPlan property value. The persistEsimDataPlan property
     * @param value Value to set for the persistEsimDataPlan property.
     */
    public set persistEsimDataPlan(value: boolean | undefined) {
        this._persistEsimDataPlan = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("keepEnrollmentData", this.keepEnrollmentData);
        writer.writeBooleanValue("keepUserData", this.keepUserData);
        writer.writeStringValue("macOsUnlockCode", this.macOsUnlockCode);
        writer.writeBooleanValue("persistEsimDataPlan", this.persistEsimDataPlan);
        writer.writeAdditionalData(this.additionalData);
    };
}
