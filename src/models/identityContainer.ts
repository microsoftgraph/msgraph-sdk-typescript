import {createB2xIdentityUserFlowFromDiscriminatorValue} from './createB2xIdentityUserFlowFromDiscriminatorValue';
import {createConditionalAccessRootFromDiscriminatorValue} from './createConditionalAccessRootFromDiscriminatorValue';
import {createIdentityApiConnectorFromDiscriminatorValue} from './createIdentityApiConnectorFromDiscriminatorValue';
import {createIdentityProviderBaseFromDiscriminatorValue} from './createIdentityProviderBaseFromDiscriminatorValue';
import {createIdentityUserFlowAttributeFromDiscriminatorValue} from './createIdentityUserFlowAttributeFromDiscriminatorValue';
import {B2xIdentityUserFlow, ConditionalAccessRoot, Entity, IdentityApiConnector, IdentityProviderBase, IdentityUserFlowAttribute} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityContainer extends Entity implements Parsable {
    /** Represents entry point for API connectors. */
    private _apiConnectors?: IdentityApiConnector[] | undefined;
    /** Represents entry point for B2X/self-service sign-up identity userflows. */
    private _b2xUserFlows?: B2xIdentityUserFlow[] | undefined;
    /** the entry point for the Conditional Access (CA) object model. */
    private _conditionalAccess?: ConditionalAccessRoot | undefined;
    /** The identityProviders property */
    private _identityProviders?: IdentityProviderBase[] | undefined;
    /** Represents entry point for identity userflow attributes. */
    private _userFlowAttributes?: IdentityUserFlowAttribute[] | undefined;
    /**
     * Gets the apiConnectors property value. Represents entry point for API connectors.
     * @returns a identityApiConnector
     */
    public get apiConnectors() {
        return this._apiConnectors;
    };
    /**
     * Sets the apiConnectors property value. Represents entry point for API connectors.
     * @param value Value to set for the apiConnectors property.
     */
    public set apiConnectors(value: IdentityApiConnector[] | undefined) {
        this._apiConnectors = value;
    };
    /**
     * Gets the b2xUserFlows property value. Represents entry point for B2X/self-service sign-up identity userflows.
     * @returns a b2xIdentityUserFlow
     */
    public get b2xUserFlows() {
        return this._b2xUserFlows;
    };
    /**
     * Sets the b2xUserFlows property value. Represents entry point for B2X/self-service sign-up identity userflows.
     * @param value Value to set for the b2xUserFlows property.
     */
    public set b2xUserFlows(value: B2xIdentityUserFlow[] | undefined) {
        this._b2xUserFlows = value;
    };
    /**
     * Gets the conditionalAccess property value. the entry point for the Conditional Access (CA) object model.
     * @returns a conditionalAccessRoot
     */
    public get conditionalAccess() {
        return this._conditionalAccess;
    };
    /**
     * Sets the conditionalAccess property value. the entry point for the Conditional Access (CA) object model.
     * @param value Value to set for the conditionalAccess property.
     */
    public set conditionalAccess(value: ConditionalAccessRoot | undefined) {
        this._conditionalAccess = value;
    };
    /**
     * Instantiates a new IdentityContainer and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.identityContainer";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "apiConnectors": n => { this.apiConnectors = n.getCollectionOfObjectValues<IdentityApiConnector>(createIdentityApiConnectorFromDiscriminatorValue); },
            "b2xUserFlows": n => { this.b2xUserFlows = n.getCollectionOfObjectValues<B2xIdentityUserFlow>(createB2xIdentityUserFlowFromDiscriminatorValue); },
            "conditionalAccess": n => { this.conditionalAccess = n.getObjectValue<ConditionalAccessRoot>(createConditionalAccessRootFromDiscriminatorValue); },
            "identityProviders": n => { this.identityProviders = n.getCollectionOfObjectValues<IdentityProviderBase>(createIdentityProviderBaseFromDiscriminatorValue); },
            "userFlowAttributes": n => { this.userFlowAttributes = n.getCollectionOfObjectValues<IdentityUserFlowAttribute>(createIdentityUserFlowAttributeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the identityProviders property value. The identityProviders property
     * @returns a identityProviderBase
     */
    public get identityProviders() {
        return this._identityProviders;
    };
    /**
     * Sets the identityProviders property value. The identityProviders property
     * @param value Value to set for the identityProviders property.
     */
    public set identityProviders(value: IdentityProviderBase[] | undefined) {
        this._identityProviders = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<IdentityApiConnector>("apiConnectors", this.apiConnectors);
        writer.writeCollectionOfObjectValues<B2xIdentityUserFlow>("b2xUserFlows", this.b2xUserFlows);
        writer.writeObjectValue<ConditionalAccessRoot>("conditionalAccess", this.conditionalAccess);
        writer.writeCollectionOfObjectValues<IdentityProviderBase>("identityProviders", this.identityProviders);
        writer.writeCollectionOfObjectValues<IdentityUserFlowAttribute>("userFlowAttributes", this.userFlowAttributes);
    };
    /**
     * Gets the userFlowAttributes property value. Represents entry point for identity userflow attributes.
     * @returns a identityUserFlowAttribute
     */
    public get userFlowAttributes() {
        return this._userFlowAttributes;
    };
    /**
     * Sets the userFlowAttributes property value. Represents entry point for identity userflow attributes.
     * @param value Value to set for the userFlowAttributes property.
     */
    public set userFlowAttributes(value: IdentityUserFlowAttribute[] | undefined) {
        this._userFlowAttributes = value;
    };
}
