import {createManagedAppRegistrationFromDiscriminatorValue} from './createManagedAppRegistrationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, ManagedAppRegistration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedAppRegistrations property of the microsoft.graph.deviceAppManagement entity.
 */
export class ManagedAppRegistrationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: ManagedAppRegistration[] | undefined;
    /**
     * Instantiates a new ManagedAppRegistrationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedAppRegistration>(createManagedAppRegistrationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ManagedAppRegistration>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a managedAppRegistration
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ManagedAppRegistration[] | undefined) {
        this._value = value;
    };
}
