import {createWindowsUniversalAppXContainedAppFromDiscriminatorValue} from './createWindowsUniversalAppXContainedAppFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, WindowsUniversalAppXContainedApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsUniversalAppXContainedAppCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: WindowsUniversalAppXContainedApp[] | undefined;
    /**
     * Instantiates a new WindowsUniversalAppXContainedAppCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<WindowsUniversalAppXContainedApp>(createWindowsUniversalAppXContainedAppFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<WindowsUniversalAppXContainedApp>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a windowsUniversalAppXContainedApp
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: WindowsUniversalAppXContainedApp[] | undefined) {
        this._value = value;
    };
}
