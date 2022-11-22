import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAutomaticRequestSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The gracePeriodBeforeAccessRemoval property */
    private _gracePeriodBeforeAccessRemoval?: Duration | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The removeAccessWhenTargetLeavesAllowedTargets property */
    private _removeAccessWhenTargetLeavesAllowedTargets?: boolean | undefined;
    /** If set to true, automatic assignments will be created for targets in the allowed target scope. */
    private _requestAccessForAllowedTargets?: boolean | undefined;
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
     * Instantiates a new accessPackageAutomaticRequestSettings and sets the default values.
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
            "gracePeriodBeforeAccessRemoval": n => { this.gracePeriodBeforeAccessRemoval = n.getDurationValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "removeAccessWhenTargetLeavesAllowedTargets": n => { this.removeAccessWhenTargetLeavesAllowedTargets = n.getBooleanValue(); },
            "requestAccessForAllowedTargets": n => { this.requestAccessForAllowedTargets = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the gracePeriodBeforeAccessRemoval property value. The gracePeriodBeforeAccessRemoval property
     * @returns a Duration
     */
    public get gracePeriodBeforeAccessRemoval() {
        return this._gracePeriodBeforeAccessRemoval;
    };
    /**
     * Sets the gracePeriodBeforeAccessRemoval property value. The gracePeriodBeforeAccessRemoval property
     * @param value Value to set for the gracePeriodBeforeAccessRemoval property.
     */
    public set gracePeriodBeforeAccessRemoval(value: Duration | undefined) {
        this._gracePeriodBeforeAccessRemoval = value;
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
     * Gets the removeAccessWhenTargetLeavesAllowedTargets property value. The removeAccessWhenTargetLeavesAllowedTargets property
     * @returns a boolean
     */
    public get removeAccessWhenTargetLeavesAllowedTargets() {
        return this._removeAccessWhenTargetLeavesAllowedTargets;
    };
    /**
     * Sets the removeAccessWhenTargetLeavesAllowedTargets property value. The removeAccessWhenTargetLeavesAllowedTargets property
     * @param value Value to set for the removeAccessWhenTargetLeavesAllowedTargets property.
     */
    public set removeAccessWhenTargetLeavesAllowedTargets(value: boolean | undefined) {
        this._removeAccessWhenTargetLeavesAllowedTargets = value;
    };
    /**
     * Gets the requestAccessForAllowedTargets property value. If set to true, automatic assignments will be created for targets in the allowed target scope.
     * @returns a boolean
     */
    public get requestAccessForAllowedTargets() {
        return this._requestAccessForAllowedTargets;
    };
    /**
     * Sets the requestAccessForAllowedTargets property value. If set to true, automatic assignments will be created for targets in the allowed target scope.
     * @param value Value to set for the requestAccessForAllowedTargets property.
     */
    public set requestAccessForAllowedTargets(value: boolean | undefined) {
        this._requestAccessForAllowedTargets = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDurationValue("gracePeriodBeforeAccessRemoval", this.gracePeriodBeforeAccessRemoval);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("removeAccessWhenTargetLeavesAllowedTargets", this.removeAccessWhenTargetLeavesAllowedTargets);
        writer.writeBooleanValue("requestAccessForAllowedTargets", this.requestAccessForAllowedTargets);
        writer.writeAdditionalData(this.additionalData);
    };
}
