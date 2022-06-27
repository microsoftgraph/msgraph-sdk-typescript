import {AndroidCustomConfiguration} from './androidCustomConfiguration';
import {createOmaSettingFromDiscriminatorValue} from './createOmaSettingFromDiscriminatorValue';
import {DeviceConfigurationImpl, OmaSettingImpl} from './index';
import {OmaSetting} from './omaSetting';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidCustomConfigurationImpl extends DeviceConfigurationImpl implements AndroidCustomConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** OMA settings. This collection can contain a maximum of 1000 elements. */
    public omaSettings?: OmaSetting[] | undefined;
    /**
     * Instantiates a new AndroidCustomConfiguration and sets the default values.
     * @param androidCustomConfigurationParameterValue 
     */
    public constructor(androidCustomConfigurationParameterValue?: AndroidCustomConfiguration | undefined) {
        super(androidCustomConfigurationParameterValue);
        this.additionalData = androidCustomConfigurationParameterValue?.additionalData ? androidCustomConfigurationParameterValue?.additionalData! : {};
        const omaSettingsArrValue: OmaSettingImpl[] = []; androidCustomConfigurationParameterValue.omaSettings?.forEach(element => {omaSettingsArrValue.push(element instanceof OmaSettingImpl? element : new OmaSettingImpl(element));});
        this.omaSettings = omaSettingsArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "omaSettings": n => { this.omaSettings = n.getCollectionOfObjectValues<OmaSettingImpl>(createOmaSettingFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.omaSettings && this.omaSettings.length != 0){        const omaSettingsArrValue: OmaSettingImpl[] = []; this.omaSettings?.forEach(element => {omaSettingsArrValue.push(element instanceof OmaSettingImpl? element : new OmaSettingImpl(element));});
            writer.writeCollectionOfObjectValues<OmaSettingImpl>("omaSettings", omaSettingsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
