import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DefaultUserRolePermissions implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether the default user role can create applications.  */
    private _allowedToCreateApps?: boolean | undefined;
    /** Indicates whether the default user role can create security groups.  */
    private _allowedToCreateSecurityGroups?: boolean | undefined;
    /** Indicates whether the default user role can read other users.  */
    private _allowedToReadOtherUsers?: boolean | undefined;
    /** Indicates if user consent to apps is allowed, and if it is, which permission to grant consent and which app consent policy (permissionGrantPolicy) govern the permission for users to grant consent. Value should be in the format managePermissionGrantsForSelf.{id}, where {id} is the id of a built-in or custom app consent policy. An empty list indicates user consent to apps is disabled.  */
    private _permissionGrantPoliciesAssigned?: string[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the allowedToCreateApps property value. Indicates whether the default user role can create applications.
     * @returns a boolean
     */
    public get allowedToCreateApps() {
        return this._allowedToCreateApps;
    };
    /**
     * Sets the allowedToCreateApps property value. Indicates whether the default user role can create applications.
     * @param value Value to set for the allowedToCreateApps property.
     */
    public set allowedToCreateApps(value: boolean | undefined) {
        this._allowedToCreateApps = value;
    };
    /**
     * Gets the allowedToCreateSecurityGroups property value. Indicates whether the default user role can create security groups.
     * @returns a boolean
     */
    public get allowedToCreateSecurityGroups() {
        return this._allowedToCreateSecurityGroups;
    };
    /**
     * Sets the allowedToCreateSecurityGroups property value. Indicates whether the default user role can create security groups.
     * @param value Value to set for the allowedToCreateSecurityGroups property.
     */
    public set allowedToCreateSecurityGroups(value: boolean | undefined) {
        this._allowedToCreateSecurityGroups = value;
    };
    /**
     * Gets the allowedToReadOtherUsers property value. Indicates whether the default user role can read other users.
     * @returns a boolean
     */
    public get allowedToReadOtherUsers() {
        return this._allowedToReadOtherUsers;
    };
    /**
     * Sets the allowedToReadOtherUsers property value. Indicates whether the default user role can read other users.
     * @param value Value to set for the allowedToReadOtherUsers property.
     */
    public set allowedToReadOtherUsers(value: boolean | undefined) {
        this._allowedToReadOtherUsers = value;
    };
    /**
     * Instantiates a new defaultUserRolePermissions and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "allowedToCreateApps": (o, n) => { (o as unknown as DefaultUserRolePermissions).allowedToCreateApps = n.getBooleanValue(); },
            "allowedToCreateSecurityGroups": (o, n) => { (o as unknown as DefaultUserRolePermissions).allowedToCreateSecurityGroups = n.getBooleanValue(); },
            "allowedToReadOtherUsers": (o, n) => { (o as unknown as DefaultUserRolePermissions).allowedToReadOtherUsers = n.getBooleanValue(); },
            "permissionGrantPoliciesAssigned": (o, n) => { (o as unknown as DefaultUserRolePermissions).permissionGrantPoliciesAssigned = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the permissionGrantPoliciesAssigned property value. Indicates if user consent to apps is allowed, and if it is, which permission to grant consent and which app consent policy (permissionGrantPolicy) govern the permission for users to grant consent. Value should be in the format managePermissionGrantsForSelf.{id}, where {id} is the id of a built-in or custom app consent policy. An empty list indicates user consent to apps is disabled.
     * @returns a string
     */
    public get permissionGrantPoliciesAssigned() {
        return this._permissionGrantPoliciesAssigned;
    };
    /**
     * Sets the permissionGrantPoliciesAssigned property value. Indicates if user consent to apps is allowed, and if it is, which permission to grant consent and which app consent policy (permissionGrantPolicy) govern the permission for users to grant consent. Value should be in the format managePermissionGrantsForSelf.{id}, where {id} is the id of a built-in or custom app consent policy. An empty list indicates user consent to apps is disabled.
     * @param value Value to set for the permissionGrantPoliciesAssigned property.
     */
    public set permissionGrantPoliciesAssigned(value: string[] | undefined) {
        this._permissionGrantPoliciesAssigned = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowedToCreateApps", this.allowedToCreateApps);
        writer.writeBooleanValue("allowedToCreateSecurityGroups", this.allowedToCreateSecurityGroups);
        writer.writeBooleanValue("allowedToReadOtherUsers", this.allowedToReadOtherUsers);
        writer.writeCollectionOfPrimitiveValues<string>("permissionGrantPoliciesAssigned", this.permissionGrantPoliciesAssigned);
        writer.writeAdditionalData(this.additionalData);
    };
}
