import {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import {ConditionalAccessRoot} from './conditionalAccessRoot';
import {createB2xIdentityUserFlowFromDiscriminatorValue} from './createB2xIdentityUserFlowFromDiscriminatorValue';
import {createConditionalAccessRootFromDiscriminatorValue} from './createConditionalAccessRootFromDiscriminatorValue';
import {createIdentityApiConnectorFromDiscriminatorValue} from './createIdentityApiConnectorFromDiscriminatorValue';
import {createIdentityProviderBaseFromDiscriminatorValue} from './createIdentityProviderBaseFromDiscriminatorValue';
import {createIdentityUserFlowAttributeFromDiscriminatorValue} from './createIdentityUserFlowAttributeFromDiscriminatorValue';
import {IdentityApiConnector} from './identityApiConnector';
import {IdentityContainer} from './identityContainer';
import {IdentityProviderBase} from './identityProviderBase';
import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {B2xIdentityUserFlowImpl, ConditionalAccessRootImpl, EntityImpl, IdentityApiConnectorImpl, IdentityProviderBaseImpl, IdentityUserFlowAttributeImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class IdentityContainerImpl extends EntityImpl implements IdentityContainer {
    /** Represents entry point for API connectors. */
    private _apiConnectors?: IdentityApiConnector[] | undefined;
    /** Represents entry point for B2X and self-service sign-up identity userflows. */
    private _b2xUserFlows?: B2xIdentityUserFlow[] | undefined;
    /** the entry point for the Conditional Access (CA) object model. */
    private _conditionalAccess?: ConditionalAccessRoot | undefined;
    /** Represents entry point for identity provider base. */
    private _identityProviders?: IdentityProviderBase[] | undefined;
    /** Represents entry point for identity userflow attributes. */
    private _userFlowAttributes?: IdentityUserFlowAttribute[] | undefined;
    /**
     * Gets the apiConnectors property value. Represents entry point for API connectors.
     * @returns a IdentityApiConnectorInterface
     */
    public get apiConnectors() {
        return this._apiConnectors;
    };
    /**
     * Sets the apiConnectors property value. Represents entry point for API connectors.
     * @param value Value to set for the apiConnectors property.
     */
    public set apiConnectors(value: IdentityApiConnector[] | undefined) {
        if(value) {
            const apiConnectorsArrValue: IdentityApiConnectorImpl[] = [];
            this.apiConnectors?.forEach(element => {
                apiConnectorsArrValue.push((element instanceof IdentityApiConnectorImpl? element:new IdentityApiConnectorImpl(element)));
            });
            this._apiConnectors = apiConnectorsArrValue;
        }
    };
    /**
     * Gets the b2xUserFlows property value. Represents entry point for B2X and self-service sign-up identity userflows.
     * @returns a B2xIdentityUserFlowInterface
     */
    public get b2xUserFlows() {
        return this._b2xUserFlows;
    };
    /**
     * Sets the b2xUserFlows property value. Represents entry point for B2X and self-service sign-up identity userflows.
     * @param value Value to set for the b2xUserFlows property.
     */
    public set b2xUserFlows(value: B2xIdentityUserFlow[] | undefined) {
        if(value) {
            const b2xUserFlowsArrValue: B2xIdentityUserFlowImpl[] = [];
            this.b2xUserFlows?.forEach(element => {
                b2xUserFlowsArrValue.push((element instanceof B2xIdentityUserFlowImpl? element:new B2xIdentityUserFlowImpl(element)));
            });
            this._b2xUserFlows = b2xUserFlowsArrValue;
        }
    };
    /**
     * Gets the conditionalAccess property value. the entry point for the Conditional Access (CA) object model.
     * @returns a ConditionalAccessRootInterface
     */
    public get conditionalAccess() {
        return this._conditionalAccess;
    };
    /**
     * Sets the conditionalAccess property value. the entry point for the Conditional Access (CA) object model.
     * @param value Value to set for the conditionalAccess property.
     */
    public set conditionalAccess(value: ConditionalAccessRoot | undefined) {
        if(value) {
            this._conditionalAccess = value instanceof ConditionalAccessRootImpl? value : new ConditionalAccessRootImpl(value);
        }
    };
    /**
     * Instantiates a new identityContainer and sets the default values.
     * @param identityContainerParameterValue 
     */
    public constructor(identityContainerParameterValue?: IdentityContainer | undefined) {
        super(identityContainerParameterValue);
        this._apiConnectors = identityContainerParameterValue?.apiConnectors;
        this._b2xUserFlows = identityContainerParameterValue?.b2xUserFlows;
        this._conditionalAccess = identityContainerParameterValue?.conditionalAccess;
        this._identityProviders = identityContainerParameterValue?.identityProviders;
        this._userFlowAttributes = identityContainerParameterValue?.userFlowAttributes;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "apiConnectors": n => { this.apiConnectors = n.getCollectionOfObjectValues<IdentityApiConnectorImpl>(createIdentityApiConnectorFromDiscriminatorValue); },
            "b2xUserFlows": n => { this.b2xUserFlows = n.getCollectionOfObjectValues<B2xIdentityUserFlowImpl>(createB2xIdentityUserFlowFromDiscriminatorValue); },
            "conditionalAccess": n => { this.conditionalAccess = n.getObjectValue<ConditionalAccessRootImpl>(createConditionalAccessRootFromDiscriminatorValue); },
            "identityProviders": n => { this.identityProviders = n.getCollectionOfObjectValues<IdentityProviderBaseImpl>(createIdentityProviderBaseFromDiscriminatorValue); },
            "userFlowAttributes": n => { this.userFlowAttributes = n.getCollectionOfObjectValues<IdentityUserFlowAttributeImpl>(createIdentityUserFlowAttributeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the identityProviders property value. Represents entry point for identity provider base.
     * @returns a IdentityProviderBaseInterface
     */
    public get identityProviders() {
        return this._identityProviders;
    };
    /**
     * Sets the identityProviders property value. Represents entry point for identity provider base.
     * @param value Value to set for the identityProviders property.
     */
    public set identityProviders(value: IdentityProviderBase[] | undefined) {
        if(value) {
            const identityProvidersArrValue: IdentityProviderBaseImpl[] = [];
            this.identityProviders?.forEach(element => {
                identityProvidersArrValue.push((element instanceof IdentityProviderBaseImpl? element:new IdentityProviderBaseImpl(element)));
            });
            this._identityProviders = identityProvidersArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.apiConnectors && this.apiConnectors.length != 0){        const apiConnectorsArrValue: IdentityApiConnectorImpl[] = [];
        this.apiConnectors?.forEach(element => {
            apiConnectorsArrValue.push((element instanceof IdentityApiConnectorImpl? element:new IdentityApiConnectorImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IdentityApiConnectorImpl>("apiConnectors", apiConnectorsArrValue);
        }
        if(this.b2xUserFlows && this.b2xUserFlows.length != 0){        const b2xUserFlowsArrValue: B2xIdentityUserFlowImpl[] = [];
        this.b2xUserFlows?.forEach(element => {
            b2xUserFlowsArrValue.push((element instanceof B2xIdentityUserFlowImpl? element:new B2xIdentityUserFlowImpl(element)));
        });
            writer.writeCollectionOfObjectValues<B2xIdentityUserFlowImpl>("b2xUserFlows", b2xUserFlowsArrValue);
        }
        if(this.conditionalAccess){
            writer.writeObjectValue<ConditionalAccessRootImpl>("conditionalAccess", (!this.conditionalAccess || this.conditionalAccess instanceof ConditionalAccessRootImpl? this.conditionalAccess : new ConditionalAccessRootImpl(this.conditionalAccess)));
        }
        if(this.identityProviders && this.identityProviders.length != 0){        const identityProvidersArrValue: IdentityProviderBaseImpl[] = [];
        this.identityProviders?.forEach(element => {
            identityProvidersArrValue.push((element instanceof IdentityProviderBaseImpl? element:new IdentityProviderBaseImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IdentityProviderBaseImpl>("identityProviders", identityProvidersArrValue);
        }
        if(this.userFlowAttributes && this.userFlowAttributes.length != 0){        const userFlowAttributesArrValue: IdentityUserFlowAttributeImpl[] = [];
        this.userFlowAttributes?.forEach(element => {
            userFlowAttributesArrValue.push((element instanceof IdentityUserFlowAttributeImpl? element:new IdentityUserFlowAttributeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IdentityUserFlowAttributeImpl>("userFlowAttributes", userFlowAttributesArrValue);
        }
    };
    /**
     * Gets the userFlowAttributes property value. Represents entry point for identity userflow attributes.
     * @returns a IdentityUserFlowAttributeInterface
     */
    public get userFlowAttributes() {
        return this._userFlowAttributes;
    };
    /**
     * Sets the userFlowAttributes property value. Represents entry point for identity userflow attributes.
     * @param value Value to set for the userFlowAttributes property.
     */
    public set userFlowAttributes(value: IdentityUserFlowAttribute[] | undefined) {
        if(value) {
            const userFlowAttributesArrValue: IdentityUserFlowAttributeImpl[] = [];
            this.userFlowAttributes?.forEach(element => {
                userFlowAttributesArrValue.push((element instanceof IdentityUserFlowAttributeImpl? element:new IdentityUserFlowAttributeImpl(element)));
            });
            this._userFlowAttributes = userFlowAttributesArrValue;
        }
    };
}
