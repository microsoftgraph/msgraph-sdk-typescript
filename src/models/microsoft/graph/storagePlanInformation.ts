import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StoragePlanInformation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether there are higher storage quota plans available. Read-only.  */
    private _upgradeAvailable?: boolean | undefined;
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
     * Instantiates a new storagePlanInformation and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "upgradeAvailable": (o, n) => { (o as unknown as StoragePlanInformation).upgradeAvailable = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("upgradeAvailable", this.upgradeAvailable);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the upgradeAvailable property value. Indicates whether there are higher storage quota plans available. Read-only.
     * @returns a boolean
     */
    public get upgradeAvailable() {
        return this._upgradeAvailable;
    };
    /**
     * Sets the upgradeAvailable property value. Indicates whether there are higher storage quota plans available. Read-only.
     * @param value Value to set for the upgradeAvailable property.
     */
    public set upgradeAvailable(value: boolean | undefined) {
        this._upgradeAvailable = value;
    };
}
