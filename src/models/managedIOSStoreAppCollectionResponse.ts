import {createManagedIOSStoreAppFromDiscriminatorValue} from './createManagedIOSStoreAppFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, ManagedIOSStoreApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedIOSStoreAppCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: ManagedIOSStoreApp[] | undefined;
    /**
     * Instantiates a new ManagedIOSStoreAppCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedIOSStoreApp>(createManagedIOSStoreAppFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ManagedIOSStoreApp>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a managedIOSStoreApp
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ManagedIOSStoreApp[] | undefined) {
        this._value = value;
    };
}
