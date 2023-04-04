import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRbacResourceAction extends Entity implements Parsable {
    /** The actionVerb property */
    private _actionVerb?: string | undefined;
    /** The authenticationContextId property */
    private _authenticationContextId?: string | undefined;
    /** The description property */
    private _description?: string | undefined;
    /** The isAuthenticationContextSettable property */
    private _isAuthenticationContextSettable?: boolean | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The resourceScopeId property */
    private _resourceScopeId?: string | undefined;
    /**
     * Gets the actionVerb property value. The actionVerb property
     * @returns a string
     */
    public get actionVerb() {
        return this._actionVerb;
    };
    /**
     * Sets the actionVerb property value. The actionVerb property
     * @param value Value to set for the actionVerb property.
     */
    public set actionVerb(value: string | undefined) {
        this._actionVerb = value;
    };
    /**
     * Gets the authenticationContextId property value. The authenticationContextId property
     * @returns a string
     */
    public get authenticationContextId() {
        return this._authenticationContextId;
    };
    /**
     * Sets the authenticationContextId property value. The authenticationContextId property
     * @param value Value to set for the authenticationContextId property.
     */
    public set authenticationContextId(value: string | undefined) {
        this._authenticationContextId = value;
    };
    /**
     * Instantiates a new unifiedRbacResourceAction and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. The description property
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description property
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "actionVerb": n => { this.actionVerb = n.getStringValue(); },
            "authenticationContextId": n => { this.authenticationContextId = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "isAuthenticationContextSettable": n => { this.isAuthenticationContextSettable = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "resourceScopeId": n => { this.resourceScopeId = n.getStringValue(); },
        };
    };
    /**
     * Gets the isAuthenticationContextSettable property value. The isAuthenticationContextSettable property
     * @returns a boolean
     */
    public get isAuthenticationContextSettable() {
        return this._isAuthenticationContextSettable;
    };
    /**
     * Sets the isAuthenticationContextSettable property value. The isAuthenticationContextSettable property
     * @param value Value to set for the isAuthenticationContextSettable property.
     */
    public set isAuthenticationContextSettable(value: boolean | undefined) {
        this._isAuthenticationContextSettable = value;
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the resourceScopeId property value. The resourceScopeId property
     * @returns a string
     */
    public get resourceScopeId() {
        return this._resourceScopeId;
    };
    /**
     * Sets the resourceScopeId property value. The resourceScopeId property
     * @param value Value to set for the resourceScopeId property.
     */
    public set resourceScopeId(value: string | undefined) {
        this._resourceScopeId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("actionVerb", this.actionVerb);
        writer.writeStringValue("authenticationContextId", this.authenticationContextId);
        writer.writeStringValue("description", this.description);
        writer.writeBooleanValue("isAuthenticationContextSettable", this.isAuthenticationContextSettable);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("resourceScopeId", this.resourceScopeId);
    };
}
