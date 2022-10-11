import {AccessPackage, BaseCollectionPaginationCountResponse} from '../../../../../../models/';
import {createAccessPackageFromDiscriminatorValue} from '../../../../../../models/createAccessPackageFromDiscriminatorValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the filterByCurrentUser method. */
export class FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: AccessPackage[] | undefined;
    /**
     * Instantiates a new filterByCurrentUserWithOnResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AccessPackage>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a accessPackage
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: AccessPackage[] | undefined) {
        this._value = value;
    };
}
