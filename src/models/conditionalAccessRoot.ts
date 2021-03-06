import {createConditionalAccessPolicyFromDiscriminatorValue} from './createConditionalAccessPolicyFromDiscriminatorValue';
import {createNamedLocationFromDiscriminatorValue} from './createNamedLocationFromDiscriminatorValue';
import {ConditionalAccessPolicy, Entity, NamedLocation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class ConditionalAccessRoot extends Entity implements Parsable {
    /** Read-only. Nullable. Returns a collection of the specified named locations. */
    private _namedLocations?: NamedLocation[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified Conditional Access policies. */
    private _policies?: ConditionalAccessPolicy[] | undefined;
    /**
     * Instantiates a new conditionalAccessRoot and sets the default values.
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
            "namedLocations": n => { this.namedLocations = n.getCollectionOfObjectValues<NamedLocation>(createNamedLocationFromDiscriminatorValue); },
            "policies": n => { this.policies = n.getCollectionOfObjectValues<ConditionalAccessPolicy>(createConditionalAccessPolicyFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the namedLocations property value. Read-only. Nullable. Returns a collection of the specified named locations.
     * @returns a namedLocation
     */
    public get namedLocations() {
        return this._namedLocations;
    };
    /**
     * Sets the namedLocations property value. Read-only. Nullable. Returns a collection of the specified named locations.
     * @param value Value to set for the namedLocations property.
     */
    public set namedLocations(value: NamedLocation[] | undefined) {
        this._namedLocations = value;
    };
    /**
     * Gets the policies property value. Read-only. Nullable. Returns a collection of the specified Conditional Access policies.
     * @returns a conditionalAccessPolicy
     */
    public get policies() {
        return this._policies;
    };
    /**
     * Sets the policies property value. Read-only. Nullable. Returns a collection of the specified Conditional Access policies.
     * @param value Value to set for the policies property.
     */
    public set policies(value: ConditionalAccessPolicy[] | undefined) {
        this._policies = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<NamedLocation>("namedLocations", this.namedLocations);
        writer.writeCollectionOfObjectValues<ConditionalAccessPolicy>("policies", this.policies);
    };
}
