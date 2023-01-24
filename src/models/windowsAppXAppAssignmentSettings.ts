import {MobileAppAssignmentSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsAppXAppAssignmentSettings extends MobileAppAssignmentSettings implements Parsable {
    /** Whether or not to use device execution context for Windows AppX mobile app. */
    private _useDeviceContext?: boolean | undefined;
    /**
     * Instantiates a new WindowsAppXAppAssignmentSettings and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.windowsAppXAppAssignmentSettings";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "useDeviceContext": n => { this.useDeviceContext = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("useDeviceContext", this.useDeviceContext);
    };
    /**
     * Gets the useDeviceContext property value. Whether or not to use device execution context for Windows AppX mobile app.
     * @returns a boolean
     */
    public get useDeviceContext() {
        return this._useDeviceContext;
    };
    /**
     * Sets the useDeviceContext property value. Whether or not to use device execution context for Windows AppX mobile app.
     * @param value Value to set for the useDeviceContext property.
     */
    public set useDeviceContext(value: boolean | undefined) {
        this._useDeviceContext = value;
    };
}
