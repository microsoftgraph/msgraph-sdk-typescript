import {createOmaSettingFromDiscriminatorValue} from './createOmaSettingFromDiscriminatorValue';
import {DeviceConfigurationImpl, OmaSettingImpl} from './index';
import {OmaSetting} from './omaSetting';
import {WindowsPhone81CustomConfiguration} from './windowsPhone81CustomConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsPhone81CustomConfigurationImpl extends DeviceConfigurationImpl implements WindowsPhone81CustomConfiguration {
    /** OMA settings. This collection can contain a maximum of 1000 elements. */
    private _omaSettings?: OmaSetting[] | undefined;
    /**
     * Instantiates a new WindowsPhone81CustomConfiguration and sets the default values.
     * @param windowsPhone81CustomConfigurationParameterValue 
     */
    public constructor(windowsPhone81CustomConfigurationParameterValue?: WindowsPhone81CustomConfiguration | undefined) {
        super(windowsPhone81CustomConfigurationParameterValue);
        this._omaSettings = windowsPhone81CustomConfigurationParameterValue?.omaSettings;
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
     * Gets the omaSettings property value. OMA settings. This collection can contain a maximum of 1000 elements.
     * @returns a OmaSettingInterface
     */
    public get omaSettings() {
        return this._omaSettings;
    };
    /**
     * Sets the omaSettings property value. OMA settings. This collection can contain a maximum of 1000 elements.
     * @param value Value to set for the omaSettings property.
     */
    public set omaSettings(value: OmaSetting[] | undefined) {
        if(value) {
            const omaSettingsArrValue: OmaSettingImpl[] = [];
            this.omaSettings?.forEach(element => {
                omaSettingsArrValue.push((element instanceof OmaSettingImpl? element:new OmaSettingImpl(element)));
            });
            this._omaSettings = omaSettingsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.omaSettings && this.omaSettings.length != 0){        const omaSettingsArrValue: OmaSettingImpl[] = [];
        this.omaSettings?.forEach(element => {
            omaSettingsArrValue.push((element instanceof OmaSettingImpl? element:new OmaSettingImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OmaSettingImpl>("omaSettings", omaSettingsArrValue);
        }
    };
}
