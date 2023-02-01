import {DelegatedAdminAccessContainerType} from './delegatedAdminAccessContainerType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DelegatedAdminAccessContainer implements AdditionalDataHolder, Parsable {
    /** The accessContainerId property */
    private _accessContainerId?: string | undefined;
    /** The accessContainerType property */
    private _accessContainerType?: DelegatedAdminAccessContainerType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the accessContainerId property value. The accessContainerId property
     * @returns a string
     */
    public get accessContainerId() {
        return this._accessContainerId;
    };
    /**
     * Sets the accessContainerId property value. The accessContainerId property
     * @param value Value to set for the accessContainerId property.
     */
    public set accessContainerId(value: string | undefined) {
        this._accessContainerId = value;
    };
    /**
     * Gets the accessContainerType property value. The accessContainerType property
     * @returns a delegatedAdminAccessContainerType
     */
    public get accessContainerType() {
        return this._accessContainerType;
    };
    /**
     * Sets the accessContainerType property value. The accessContainerType property
     * @param value Value to set for the accessContainerType property.
     */
    public set accessContainerType(value: DelegatedAdminAccessContainerType | undefined) {
        this._accessContainerType = value;
    };
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
     * Instantiates a new delegatedAdminAccessContainer and sets the default values.
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
            "accessContainerId": n => { this.accessContainerId = n.getStringValue(); },
            "accessContainerType": n => { this.accessContainerType = n.getEnumValue<DelegatedAdminAccessContainerType>(DelegatedAdminAccessContainerType); },
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
        writer.writeStringValue("accessContainerId", this.accessContainerId);
        writer.writeEnumValue<DelegatedAdminAccessContainerType>("accessContainerType", this.accessContainerType);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
