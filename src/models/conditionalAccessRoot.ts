import {createAuthenticationContextClassReferenceFromDiscriminatorValue} from './createAuthenticationContextClassReferenceFromDiscriminatorValue';
import {createAuthenticationStrengthRootFromDiscriminatorValue} from './createAuthenticationStrengthRootFromDiscriminatorValue';
import {createConditionalAccessPolicyFromDiscriminatorValue} from './createConditionalAccessPolicyFromDiscriminatorValue';
import {createConditionalAccessTemplateFromDiscriminatorValue} from './createConditionalAccessTemplateFromDiscriminatorValue';
import {createNamedLocationFromDiscriminatorValue} from './createNamedLocationFromDiscriminatorValue';
import {AuthenticationContextClassReference, AuthenticationStrengthRoot, ConditionalAccessPolicy, ConditionalAccessTemplate, Entity, NamedLocation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessRoot extends Entity implements Parsable {
    /** Read-only. Nullable. Returns a collection of the specified authentication context class references. */
    private _authenticationContextClassReferences?: AuthenticationContextClassReference[] | undefined;
    /** The authenticationStrength property */
    private _authenticationStrength?: AuthenticationStrengthRoot | undefined;
    /** Read-only. Nullable. Returns a collection of the specified named locations. */
    private _namedLocations?: NamedLocation[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified Conditional Access (CA) policies. */
    private _policies?: ConditionalAccessPolicy[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified Conditional Access templates. */
    private _templates?: ConditionalAccessTemplate[] | undefined;
    /**
     * Gets the authenticationContextClassReferences property value. Read-only. Nullable. Returns a collection of the specified authentication context class references.
     * @returns a authenticationContextClassReference
     */
    public get authenticationContextClassReferences() {
        return this._authenticationContextClassReferences;
    };
    /**
     * Sets the authenticationContextClassReferences property value. Read-only. Nullable. Returns a collection of the specified authentication context class references.
     * @param value Value to set for the authenticationContextClassReferences property.
     */
    public set authenticationContextClassReferences(value: AuthenticationContextClassReference[] | undefined) {
        this._authenticationContextClassReferences = value;
    };
    /**
     * Gets the authenticationStrength property value. The authenticationStrength property
     * @returns a authenticationStrengthRoot
     */
    public get authenticationStrength() {
        return this._authenticationStrength;
    };
    /**
     * Sets the authenticationStrength property value. The authenticationStrength property
     * @param value Value to set for the authenticationStrength property.
     */
    public set authenticationStrength(value: AuthenticationStrengthRoot | undefined) {
        this._authenticationStrength = value;
    };
    /**
     * Instantiates a new ConditionalAccessRoot and sets the default values.
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
            "authenticationContextClassReferences": n => { this.authenticationContextClassReferences = n.getCollectionOfObjectValues<AuthenticationContextClassReference>(createAuthenticationContextClassReferenceFromDiscriminatorValue); },
            "authenticationStrength": n => { this.authenticationStrength = n.getObjectValue<AuthenticationStrengthRoot>(createAuthenticationStrengthRootFromDiscriminatorValue); },
            "namedLocations": n => { this.namedLocations = n.getCollectionOfObjectValues<NamedLocation>(createNamedLocationFromDiscriminatorValue); },
            "policies": n => { this.policies = n.getCollectionOfObjectValues<ConditionalAccessPolicy>(createConditionalAccessPolicyFromDiscriminatorValue); },
            "templates": n => { this.templates = n.getCollectionOfObjectValues<ConditionalAccessTemplate>(createConditionalAccessTemplateFromDiscriminatorValue); },
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
     * Gets the policies property value. Read-only. Nullable. Returns a collection of the specified Conditional Access (CA) policies.
     * @returns a conditionalAccessPolicy
     */
    public get policies() {
        return this._policies;
    };
    /**
     * Sets the policies property value. Read-only. Nullable. Returns a collection of the specified Conditional Access (CA) policies.
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
        writer.writeCollectionOfObjectValues<AuthenticationContextClassReference>("authenticationContextClassReferences", this.authenticationContextClassReferences);
        writer.writeObjectValue<AuthenticationStrengthRoot>("authenticationStrength", this.authenticationStrength);
        writer.writeCollectionOfObjectValues<NamedLocation>("namedLocations", this.namedLocations);
        writer.writeCollectionOfObjectValues<ConditionalAccessPolicy>("policies", this.policies);
        writer.writeCollectionOfObjectValues<ConditionalAccessTemplate>("templates", this.templates);
    };
    /**
     * Gets the templates property value. Read-only. Nullable. Returns a collection of the specified Conditional Access templates.
     * @returns a conditionalAccessTemplate
     */
    public get templates() {
        return this._templates;
    };
    /**
     * Sets the templates property value. Read-only. Nullable. Returns a collection of the specified Conditional Access templates.
     * @param value Value to set for the templates property.
     */
    public set templates(value: ConditionalAccessTemplate[] | undefined) {
        this._templates = value;
    };
}
