import {AndroidWorkProfileCustomConfiguration} from './androidWorkProfileCustomConfiguration';
import {createOmaSettingFromDiscriminatorValue} from './createOmaSettingFromDiscriminatorValue';
import {DeviceConfigurationImpl, OmaSettingImpl} from './index';
import {OmaSetting} from './omaSetting';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidWorkProfileCustomConfigurationImpl extends DeviceConfigurationImpl implements AndroidWorkProfileCustomConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** OMA settings. This collection can contain a maximum of 500 elements. */
    public omaSettings?: OmaSetting[] | undefined;
    /**
     * Instantiates a new AndroidWorkProfileCustomConfiguration and sets the default values.
     * @param androidWorkProfileCustomConfigurationParameterValue 
     */
    public constructor(androidWorkProfileCustomConfigurationParameterValue?: AndroidWorkProfileCustomConfiguration | undefined) {
        super(androidWorkProfileCustomConfigurationParameterValue);
        this.additionalData = androidWorkProfileCustomConfigurationParameterValue?.additionalData ? androidWorkProfileCustomConfigurationParameterValue?.additionalData! : {};
        const omaSettingsArrValue: OmaSettingImpl[] = []; androidWorkProfileCustomConfigurationParameterValue.omaSettings?.forEach(element => {omaSettingsArrValue.push(element instanceof OmaSettingImpl? element : new OmaSettingImpl(element));});
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
