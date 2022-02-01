import {AppIdentity} from './appIdentity';
import {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuditActivityInitiator implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** If the actor initiating the activity is an app, this property indicates all its identification information including appId, displayName, servicePrincipalId, and servicePrincipalName.  */
    private _app?: AppIdentity | undefined;
    /** If the actor initiating the activity is a user, this property indicates their identification information including their id, displayName, and userPrincipalName.  */
    private _user?: UserIdentity | undefined;
    /**
     * Instantiates a new auditActivityInitiator and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the app property value. If the actor initiating the activity is an app, this property indicates all its identification information including appId, displayName, servicePrincipalId, and servicePrincipalName.
     * @returns a appIdentity
     */
    public get app() {
        return this._app;
    };
    /**
     * Gets the user property value. If the actor initiating the activity is a user, this property indicates their identification information including their id, displayName, and userPrincipalName.
     * @returns a userIdentity
     */
    public get user() {
        return this._user;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["app", (o, n) => { (o as unknown as AuditActivityInitiator).app = n.getObjectValue<AppIdentity>(AppIdentity); }],
            ["user", (o, n) => { (o as unknown as AuditActivityInitiator).user = n.getObjectValue<UserIdentity>(UserIdentity); }],
        ]);
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
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the app property value. If the actor initiating the activity is an app, this property indicates all its identification information including appId, displayName, servicePrincipalId, and servicePrincipalName.
     * @param value Value to set for the app property.
     */
    public set app(value: AppIdentity | undefined) {
        this._app = value;
    };
    /**
     * Sets the user property value. If the actor initiating the activity is a user, this property indicates their identification information including their id, displayName, and userPrincipalName.
     * @param value Value to set for the user property.
     */
    public set user(value: UserIdentity | undefined) {
        this._user = value;
    };
}
