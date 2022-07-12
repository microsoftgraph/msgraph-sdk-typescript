import {createOmaSettingFromDiscriminatorValue} from './createOmaSettingFromDiscriminatorValue';
import {DeviceConfiguration, OmaSetting} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidWorkProfileCustomConfiguration extends DeviceConfiguration implements Parsable {
    /** OMA settings. This collection can contain a maximum of 500 elements. */
    private _omaSettings?: OmaSetting[] | undefined;
    /**
     * Instantiates a new AndroidWorkProfileCustomConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "omaSettings": n => { this.omaSettings = n.getCollectionOfObjectValues<OmaSetting>(createOmaSettingFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the omaSettings property value. OMA settings. This collection can contain a maximum of 500 elements.
     * @returns a omaSetting
     */
    public get omaSettings() {
        return this._omaSettings;
    };
    /**
     * Sets the omaSettings property value. OMA settings. This collection can contain a maximum of 500 elements.
     * @param value Value to set for the omaSettings property.
     */
    public set omaSettings(value: OmaSetting[] | undefined) {
        this._omaSettings = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<OmaSetting>("omaSettings", this.omaSettings);
    };
}
