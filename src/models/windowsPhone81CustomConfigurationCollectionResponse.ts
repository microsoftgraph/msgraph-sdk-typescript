import {createWindowsPhone81CustomConfigurationFromDiscriminatorValue} from './createWindowsPhone81CustomConfigurationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, WindowsPhone81CustomConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsPhone81CustomConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: WindowsPhone81CustomConfiguration[] | undefined;
    /**
     * Instantiates a new WindowsPhone81CustomConfigurationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<WindowsPhone81CustomConfiguration>(createWindowsPhone81CustomConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<WindowsPhone81CustomConfiguration>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a windowsPhone81CustomConfiguration
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: WindowsPhone81CustomConfiguration[] | undefined) {
        this._value = value;
    };
}
