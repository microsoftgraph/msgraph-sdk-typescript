import {createOmaSettingFromDiscriminatorValue} from './createOmaSettingFromDiscriminatorValue';
import {DeviceConfigurationImpl, OmaSettingImpl} from './index';
import {OmaSetting} from './omaSetting';
import {Windows10CustomConfiguration} from './windows10CustomConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10CustomConfigurationImpl extends DeviceConfigurationImpl implements Windows10CustomConfiguration {
    /** OMA settings. This collection can contain a maximum of 1000 elements. */
    public omaSettings?: OmaSetting[] | undefined;
    /**
     * Instantiates a new Windows10CustomConfiguration and sets the default values.
     * @param windows10CustomConfigurationParameterValue 
     */
    public constructor(windows10CustomConfigurationParameterValue?: Windows10CustomConfiguration | undefined) {
        super(windows10CustomConfigurationParameterValue);
        const omaSettingsArrValue: OmaSettingImpl[] = []; this.omaSettings?.forEach(element => {omaSettingsArrValue.push(element instanceof OmaSettingImpl? element : new OmaSettingImpl(element));});
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
    };
}
