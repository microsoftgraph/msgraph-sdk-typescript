import {MdmAppConfigKeyType} from './mdmAppConfigKeyType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains properties for App configuration setting item.
 */
export class AppConfigurationSettingItem implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** app configuration key. */
    private _appConfigKey?: string | undefined;
    /** App configuration key types. */
    private _appConfigKeyType?: MdmAppConfigKeyType | undefined;
    /** app configuration key value. */
    private _appConfigKeyValue?: string | undefined;
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
     * Gets the appConfigKey property value. app configuration key.
     * @returns a string
     */
    public get appConfigKey() {
        return this._appConfigKey;
    };
    /**
     * Sets the appConfigKey property value. app configuration key.
     * @param value Value to set for the appConfigKey property.
     */
    public set appConfigKey(value: string | undefined) {
        this._appConfigKey = value;
    };
    /**
     * Gets the appConfigKeyType property value. App configuration key types.
     * @returns a mdmAppConfigKeyType
     */
    public get appConfigKeyType() {
        return this._appConfigKeyType;
    };
    /**
     * Sets the appConfigKeyType property value. App configuration key types.
     * @param value Value to set for the appConfigKeyType property.
     */
    public set appConfigKeyType(value: MdmAppConfigKeyType | undefined) {
        this._appConfigKeyType = value;
    };
    /**
     * Gets the appConfigKeyValue property value. app configuration key value.
     * @returns a string
     */
    public get appConfigKeyValue() {
        return this._appConfigKeyValue;
    };
    /**
     * Sets the appConfigKeyValue property value. app configuration key value.
     * @param value Value to set for the appConfigKeyValue property.
     */
    public set appConfigKeyValue(value: string | undefined) {
        this._appConfigKeyValue = value;
    };
    /**
     * Instantiates a new appConfigurationSettingItem and sets the default values.
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
            "appConfigKey": n => { this.appConfigKey = n.getStringValue(); },
            "appConfigKeyType": n => { this.appConfigKeyType = n.getEnumValue<MdmAppConfigKeyType>(MdmAppConfigKeyType); },
            "appConfigKeyValue": n => { this.appConfigKeyValue = n.getStringValue(); },
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
        writer.writeStringValue("appConfigKey", this.appConfigKey);
        writer.writeEnumValue<MdmAppConfigKeyType>("appConfigKeyType", this.appConfigKeyType);
        writer.writeStringValue("appConfigKeyValue", this.appConfigKeyValue);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
