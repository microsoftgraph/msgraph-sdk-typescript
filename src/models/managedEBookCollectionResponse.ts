import {createManagedEBookFromDiscriminatorValue} from './createManagedEBookFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, ManagedEBook} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the managedEBooks property of the microsoft.graph.deviceAppManagement entity. */
export class ManagedEBookCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: ManagedEBook[] | undefined;
    /**
     * Instantiates a new ManagedEBookCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedEBook>(createManagedEBookFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ManagedEBook>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a managedEBook
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ManagedEBook[] | undefined) {
        this._value = value;
    };
}
