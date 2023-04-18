import {createSharepointSettingsFromDiscriminatorValue} from './createSharepointSettingsFromDiscriminatorValue';
import {Entity, SharepointSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Sharepoint extends Entity implements Parsable {
    /** The settings property */
    private _settings?: SharepointSettings | undefined;
    /**
     * Instantiates a new Sharepoint and sets the default values.
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
            "settings": n => { this.settings = n.getObjectValue<SharepointSettings>(createSharepointSettingsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<SharepointSettings>("settings", this.settings);
    };
    /**
     * Gets the settings property value. The settings property
     * @returns a sharepointSettings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. The settings property
     * @param value Value to set for the settings property.
     */
    public set settings(value: SharepointSettings | undefined) {
        this._settings = value;
    };
}
