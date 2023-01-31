import {createTargetedManagedAppConfigurationFromDiscriminatorValue} from './createTargetedManagedAppConfigurationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, TargetedManagedAppConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetedManagedAppConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: TargetedManagedAppConfiguration[] | undefined;
    /**
     * Instantiates a new TargetedManagedAppConfigurationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<TargetedManagedAppConfiguration>(createTargetedManagedAppConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<TargetedManagedAppConfiguration>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a targetedManagedAppConfiguration
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: TargetedManagedAppConfiguration[] | undefined) {
        this._value = value;
    };
}
