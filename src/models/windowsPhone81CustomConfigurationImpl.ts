import {createOmaSettingFromDiscriminatorValue} from './createOmaSettingFromDiscriminatorValue';
import {DeviceConfigurationImpl, OmaSettingImpl} from './index';
import {OmaSetting} from './omaSetting';
import {WindowsPhone81CustomConfiguration} from './windowsPhone81CustomConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsPhone81CustomConfigurationImpl extends DeviceConfigurationImpl implements WindowsPhone81CustomConfiguration {
    /** OMA settings. This collection can contain a maximum of 1000 elements. */
    public omaSettings?: OmaSetting[] | undefined;
    /**
     * Instantiates a new WindowsPhone81CustomConfiguration and sets the default values.
     * @param windowsPhone81CustomConfigurationParameterValue 
     */
    public constructor(windowsPhone81CustomConfigurationParameterValue?: WindowsPhone81CustomConfiguration | undefined) {
        super(windowsPhone81CustomConfigurationParameterValue);
        const omaSettingsArrValue: OmaSettingImpl[] = []; windowsPhone81CustomConfigurationParameterValue?.omaSettings?.forEach(element => {omaSettingsArrValue.push(element instanceof OmaSettingImpl? element : new OmaSettingImpl(element));});
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
