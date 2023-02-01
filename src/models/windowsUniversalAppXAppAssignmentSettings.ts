import {MobileAppAssignmentSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsUniversalAppXAppAssignmentSettings extends MobileAppAssignmentSettings implements Parsable {
    /** If true, uses device execution context for Windows Universal AppX mobile app. Device-context install is not allowed when this type of app is targeted with Available intent. Defaults to false. */
    private _useDeviceContext?: boolean | undefined;
    /**
     * Instantiates a new WindowsUniversalAppXAppAssignmentSettings and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.windowsUniversalAppXAppAssignmentSettings";
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
     * Gets the useDeviceContext property value. If true, uses device execution context for Windows Universal AppX mobile app. Device-context install is not allowed when this type of app is targeted with Available intent. Defaults to false.
     * @returns a boolean
     */
    public get useDeviceContext() {
        return this._useDeviceContext;
    };
    /**
     * Sets the useDeviceContext property value. If true, uses device execution context for Windows Universal AppX mobile app. Device-context install is not allowed when this type of app is targeted with Available intent. Defaults to false.
     * @param value Value to set for the useDeviceContext property.
     */
    public set useDeviceContext(value: boolean | undefined) {
        this._useDeviceContext = value;
    };
}
