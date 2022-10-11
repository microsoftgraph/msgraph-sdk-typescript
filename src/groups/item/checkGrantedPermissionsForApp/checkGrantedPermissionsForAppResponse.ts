import {BaseCollectionPaginationCountResponse, ResourceSpecificPermissionGrant} from '../../../models/';
import {createResourceSpecificPermissionGrantFromDiscriminatorValue} from '../../../models/createResourceSpecificPermissionGrantFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the checkGrantedPermissionsForApp method. */
export class CheckGrantedPermissionsForAppResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: ResourceSpecificPermissionGrant[] | undefined;
    /**
     * Instantiates a new checkGrantedPermissionsForAppResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<ResourceSpecificPermissionGrant>(createResourceSpecificPermissionGrantFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrant>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a resourceSpecificPermissionGrant
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ResourceSpecificPermissionGrant[] | undefined) {
        this._value = value;
    };
}
