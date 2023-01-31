import {createManagedAppConfigurationFromDiscriminatorValue} from './createManagedAppConfigurationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, ManagedAppConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: ManagedAppConfiguration[] | undefined;
    /**
     * Instantiates a new ManagedAppConfigurationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedAppConfiguration>(createManagedAppConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ManagedAppConfiguration>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a managedAppConfiguration
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: ManagedAppConfiguration[] | undefined) {
        this._value = value;
    };
}
