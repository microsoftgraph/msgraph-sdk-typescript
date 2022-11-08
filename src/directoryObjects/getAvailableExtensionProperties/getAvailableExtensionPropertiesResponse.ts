import {BaseCollectionPaginationCountResponse, ExtensionProperty} from '../../models/';
import {createExtensionPropertyFromDiscriminatorValue} from '../../models/createExtensionPropertyFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getAvailableExtensionProperties method. */
export class GetAvailableExtensionPropertiesResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: ExtensionProperty[] | undefined;
    /**
     * Instantiates a new getAvailableExtensionPropertiesResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<ExtensionProperty>(createExtensionPropertyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ExtensionProperty>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a extensionProperty
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ExtensionProperty[] | undefined) {
        this._value = value;
    };
}
