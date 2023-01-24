import {MobileContainedApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsUniversalAppXContainedApp extends MobileContainedApp implements Parsable {
    /** The app user model ID of the contained app of a WindowsUniversalAppX app. */
    private _appUserModelId?: string | undefined;
    /**
     * Gets the appUserModelId property value. The app user model ID of the contained app of a WindowsUniversalAppX app.
     * @returns a string
     */
    public get appUserModelId() {
        return this._appUserModelId;
    };
    /**
     * Sets the appUserModelId property value. The app user model ID of the contained app of a WindowsUniversalAppX app.
     * @param value Value to set for the appUserModelId property.
     */
    public set appUserModelId(value: string | undefined) {
        this._appUserModelId = value;
    };
    /**
     * Instantiates a new WindowsUniversalAppXContainedApp and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.windowsUniversalAppXContainedApp";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appUserModelId": n => { this.appUserModelId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appUserModelId", this.appUserModelId);
    };
}
