import {createWindowsPhone81GeneralConfigurationFromDiscriminatorValue} from './createWindowsPhone81GeneralConfigurationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, WindowsPhone81GeneralConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsPhone81GeneralConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: WindowsPhone81GeneralConfiguration[] | undefined;
    /**
     * Instantiates a new WindowsPhone81GeneralConfigurationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<WindowsPhone81GeneralConfiguration>(createWindowsPhone81GeneralConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<WindowsPhone81GeneralConfiguration>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a windowsPhone81GeneralConfiguration
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: WindowsPhone81GeneralConfiguration[] | undefined) {
        this._value = value;
    };
}
