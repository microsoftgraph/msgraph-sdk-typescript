import {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import {ConditionalAccessRoot} from './conditionalAccessRoot';
import {Entity} from './entity';
import {IdentityApiConnector} from './identityApiConnector';
import {IdentityProviderBase} from './identityProviderBase';
import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class IdentityContainer extends Entity implements Parsable {
    private _apiConnectors?: IdentityApiConnector[] | undefined;
    private _b2xUserFlows?: B2xIdentityUserFlow[] | undefined;
    private _conditionalAccess?: ConditionalAccessRoot | undefined;
    private _identityProviders?: IdentityProviderBase[] | undefined;
    private _userFlowAttributes?: IdentityUserFlowAttribute[] | undefined;
    /**
     * Instantiates a new identityContainer and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the apiConnectors property value. 
     * @returns a identityApiConnector
     */
    public get apiConnectors() {
        return this._apiConnectors;
    };
    /**
     * Gets the b2xUserFlows property value. 
     * @returns a b2xIdentityUserFlow
     */
    public get b2xUserFlows() {
        return this._b2xUserFlows;
    };
    /**
     * Gets the conditionalAccess property value. 
     * @returns a conditionalAccessRoot
     */
    public get conditionalAccess() {
        return this._conditionalAccess;
    };
    /**
     * Gets the identityProviders property value. 
     * @returns a identityProviderBase
     */
    public get identityProviders() {
        return this._identityProviders;
    };
    /**
     * Gets the userFlowAttributes property value. 
     * @returns a identityUserFlowAttribute
     */
    public get userFlowAttributes() {
        return this._userFlowAttributes;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["apiConnectors", (o, n) => { (o as unknown as IdentityContainer).apiConnectors = n.getCollectionOfObjectValues<IdentityApiConnector>(IdentityApiConnector); }],
            ["b2xUserFlows", (o, n) => { (o as unknown as IdentityContainer).b2xUserFlows = n.getCollectionOfObjectValues<B2xIdentityUserFlow>(B2xIdentityUserFlow); }],
            ["conditionalAccess", (o, n) => { (o as unknown as IdentityContainer).conditionalAccess = n.getObjectValue<ConditionalAccessRoot>(ConditionalAccessRoot); }],
            ["identityProviders", (o, n) => { (o as unknown as IdentityContainer).identityProviders = n.getCollectionOfObjectValues<IdentityProviderBase>(IdentityProviderBase); }],
            ["userFlowAttributes", (o, n) => { (o as unknown as IdentityContainer).userFlowAttributes = n.getCollectionOfObjectValues<IdentityUserFlowAttribute>(IdentityUserFlowAttribute); }],
        ]);
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
     * Sets the apiConnectors property value. 
     * @param value Value to set for the apiConnectors property.
     */
    public set apiConnectors(value: IdentityApiConnector[] | undefined) {
        this._apiConnectors = value;
    };
    /**
     * Sets the b2xUserFlows property value. 
     * @param value Value to set for the b2xUserFlows property.
     */
    public set b2xUserFlows(value: B2xIdentityUserFlow[] | undefined) {
        this._b2xUserFlows = value;
    };
    /**
     * Sets the conditionalAccess property value. 
     * @param value Value to set for the conditionalAccess property.
     */
    public set conditionalAccess(value: ConditionalAccessRoot | undefined) {
        this._conditionalAccess = value;
    };
    /**
     * Sets the identityProviders property value. 
     * @param value Value to set for the identityProviders property.
     */
    public set identityProviders(value: IdentityProviderBase[] | undefined) {
        this._identityProviders = value;
    };
    /**
     * Sets the userFlowAttributes property value. 
     * @param value Value to set for the userFlowAttributes property.
     */
    public set userFlowAttributes(value: IdentityUserFlowAttribute[] | undefined) {
        this._userFlowAttributes = value;
    };
}
