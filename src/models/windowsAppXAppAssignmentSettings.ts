import {MobileAppAssignmentSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsAppXAppAssignmentSettings extends MobileAppAssignmentSettings implements Parsable {
    /** When TRUE, indicates that device execution context will be used for the AppX mobile app. When FALSE, indicates that user context will be used for the AppX mobile app. By default, this property is set to FALSE. Once this property has been set to TRUE it cannot be changed. */
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
     * Gets the useDeviceContext property value. When TRUE, indicates that device execution context will be used for the AppX mobile app. When FALSE, indicates that user context will be used for the AppX mobile app. By default, this property is set to FALSE. Once this property has been set to TRUE it cannot be changed.
     * @returns a boolean
     */
    public get useDeviceContext() {
        return this._useDeviceContext;
    };
    /**
     * Sets the useDeviceContext property value. When TRUE, indicates that device execution context will be used for the AppX mobile app. When FALSE, indicates that user context will be used for the AppX mobile app. By default, this property is set to FALSE. Once this property has been set to TRUE it cannot be changed.
     * @param value Value to set for the useDeviceContext property.
     */
    public set useDeviceContext(value: boolean | undefined) {
        this._useDeviceContext = value;
    };
}
