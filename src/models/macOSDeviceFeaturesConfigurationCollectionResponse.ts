import {createMacOSDeviceFeaturesConfigurationFromDiscriminatorValue} from './createMacOSDeviceFeaturesConfigurationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, MacOSDeviceFeaturesConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MacOSDeviceFeaturesConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: MacOSDeviceFeaturesConfiguration[] | undefined;
    /**
     * Instantiates a new MacOSDeviceFeaturesConfigurationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<MacOSDeviceFeaturesConfiguration>(createMacOSDeviceFeaturesConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<MacOSDeviceFeaturesConfiguration>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a macOSDeviceFeaturesConfiguration
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: MacOSDeviceFeaturesConfiguration[] | undefined) {
        this._value = value;
    };
}
