import {PurgeAreas} from '../../../../../../../models/security/purgeAreas';
import {PurgeType} from '../../../../../../../models/security/purgeType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PurgeDataPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _purgeAreas?: PurgeAreas | undefined;
    private _purgeType?: PurgeType | undefined;
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
     * Instantiates a new purgeDataPostRequestBody and sets the default values.
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
            "purgeAreas": n => { this.purgeAreas = n.getEnumValue<PurgeAreas>(PurgeAreas); },
            "purgeType": n => { this.purgeType = n.getEnumValue<PurgeType>(PurgeType); },
        };
    };
    /**
     * Gets the purgeAreas property value. 
     * @returns a purgeAreas
     */
    public get purgeAreas() {
        return this._purgeAreas;
    };
    /**
     * Sets the purgeAreas property value. 
     * @param value Value to set for the purgeAreas property.
     */
    public set purgeAreas(value: PurgeAreas | undefined) {
        this._purgeAreas = value;
    };
    /**
     * Gets the purgeType property value. 
     * @returns a purgeType
     */
    public get purgeType() {
        return this._purgeType;
    };
    /**
     * Sets the purgeType property value. 
     * @param value Value to set for the purgeType property.
     */
    public set purgeType(value: PurgeType | undefined) {
        this._purgeType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<PurgeAreas>("purgeAreas", this.purgeAreas);
        writer.writeEnumValue<PurgeType>("purgeType", this.purgeType);
        writer.writeAdditionalData(this.additionalData);
    };
}
