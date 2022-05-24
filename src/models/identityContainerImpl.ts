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
export class IdentityContainerImpl extends EntityImpl implements IdentityContainer, Parsable {
    /** Represents entry point for API connectors. */
    public apiConnectors?: IdentityApiConnector[] | undefined;
    /** Represents entry point for B2X and self-service sign-up identity userflows. */
    public b2xUserFlows?: B2xIdentityUserFlow[] | undefined;
    /** the entry point for the Conditional Access (CA) object model. */
    public conditionalAccess?: ConditionalAccessRoot | undefined;
    /** Represents entry point for identity provider base. */
    public identityProviders?: IdentityProviderBase[] | undefined;
    /** Represents entry point for identity userflow attributes. */
    public userFlowAttributes?: IdentityUserFlowAttribute[] | undefined;
    /**
     * Instantiates a new identityContainer and sets the default values.
     * @param identityContainerParameterValue 
     */
    public constructor(identityContainerParameterValue?: IdentityContainer | undefined) {
        super();
        this.apiConnectors = identityContainerParameterValue?.apiConnectors ;
        this.b2xUserFlows = identityContainerParameterValue?.b2xUserFlows ;
        this.conditionalAccess = identityContainerParameterValue?.conditionalAccess ;
        this.identityProviders = identityContainerParameterValue?.identityProviders ;
        this.userFlowAttributes = identityContainerParameterValue?.userFlowAttributes ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.apiConnectors && this.apiConnectors.length != 0){        const apiConnectorsArrValue: IdentityApiConnectorImpl[] = []; this.apiConnectors?.forEach(element => {apiConnectorsArrValue.push(new IdentityApiConnectorImpl(element));});
        writer.writeCollectionOfObjectValues<IdentityApiConnectorImpl>("apiConnectors", apiConnectorsArrValue);
        }
        if(this.b2xUserFlows && this.b2xUserFlows.length != 0){        const b2xUserFlowsArrValue: B2xIdentityUserFlowImpl[] = []; this.b2xUserFlows?.forEach(element => {b2xUserFlowsArrValue.push(new B2xIdentityUserFlowImpl(element));});
        writer.writeCollectionOfObjectValues<B2xIdentityUserFlowImpl>("b2xUserFlows", b2xUserFlowsArrValue);
        }
        if(this.conditionalAccess){
        writer.writeObjectValue<ConditionalAccessRootImpl>("conditionalAccess", new ConditionalAccessRootImpl(this.conditionalAccess));
        }
        if(this.identityProviders && this.identityProviders.length != 0){        const identityProvidersArrValue: IdentityProviderBaseImpl[] = []; this.identityProviders?.forEach(element => {identityProvidersArrValue.push(new IdentityProviderBaseImpl(element));});
        writer.writeCollectionOfObjectValues<IdentityProviderBaseImpl>("identityProviders", identityProvidersArrValue);
        }
        if(this.userFlowAttributes && this.userFlowAttributes.length != 0){        const userFlowAttributesArrValue: IdentityUserFlowAttributeImpl[] = []; this.userFlowAttributes?.forEach(element => {userFlowAttributesArrValue.push(new IdentityUserFlowAttributeImpl(element));});
        writer.writeCollectionOfObjectValues<IdentityUserFlowAttributeImpl>("userFlowAttributes", userFlowAttributesArrValue);
        }
    };
}
