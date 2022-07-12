import {AdminMember1, AppIdentity, UserIdentity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuditActivityInitiator implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** If the actor initiating the activity is an app, this property indicates all its identification information including appId, displayName, servicePrincipalId, and servicePrincipalName. */
    private _app?: AppIdentity | AdminMember1 | undefined;
    /** If the actor initiating the activity is a user, this property indicates their identification information including their id, displayName, and userPrincipalName. */
    private _user?: UserIdentity | AdminMember1 | undefined;
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
     * Gets the app property value. If the actor initiating the activity is an app, this property indicates all its identification information including appId, displayName, servicePrincipalId, and servicePrincipalName.
     * @returns a admin
     */
    public get app() {
        return this._app;
    };
    /**
     * Sets the app property value. If the actor initiating the activity is an app, this property indicates all its identification information including appId, displayName, servicePrincipalId, and servicePrincipalName.
     * @param value Value to set for the app property.
     */
    public set app(value: AppIdentity | AdminMember1 | undefined) {
        this._app = value;
    };
    /**
     * Instantiates a new auditActivityInitiator and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "app": n => { this.app = n.getObjectValue<AppIdentity>(createAppIdentityFromDiscriminatorValue); },
            "user": n => { this.user = n.getObjectValue<UserIdentity>(createUserIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AppIdentity>("app", this.app);
        writer.writeObjectValue<UserIdentity>("user", this.user);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the user property value. If the actor initiating the activity is a user, this property indicates their identification information including their id, displayName, and userPrincipalName.
     * @returns a admin
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. If the actor initiating the activity is a user, this property indicates their identification information including their id, displayName, and userPrincipalName.
     * @param value Value to set for the user property.
     */
    public set user(value: UserIdentity | AdminMember1 | undefined) {
        this._user = value;
    };
}
