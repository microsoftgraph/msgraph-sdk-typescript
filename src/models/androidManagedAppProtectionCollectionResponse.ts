import {createAndroidManagedAppProtectionFromDiscriminatorValue} from './createAndroidManagedAppProtectionFromDiscriminatorValue';
import {AndroidManagedAppProtection, BaseCollectionPaginationCountResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidManagedAppProtectionCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: AndroidManagedAppProtection[] | undefined;
    /**
     * Instantiates a new AndroidManagedAppProtectionCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<AndroidManagedAppProtection>(createAndroidManagedAppProtectionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AndroidManagedAppProtection>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a androidManagedAppProtection
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: AndroidManagedAppProtection[] | undefined) {
        this._value = value;
    };
}
