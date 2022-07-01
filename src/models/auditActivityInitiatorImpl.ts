import {AppIdentity} from './appIdentity';
import {AuditActivityInitiator} from './auditActivityInitiator';
import {createAppIdentityFromDiscriminatorValue} from './createAppIdentityFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {AppIdentityImpl, UserIdentityImpl} from './index';
import {UserIdentity} from './userIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuditActivityInitiatorImpl implements AuditActivityInitiator {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** If the actor initiating the activity is an app, this property indicates all its identification information including appId, displayName, servicePrincipalId, and servicePrincipalName. */
    private _app?: AppIdentity | undefined;
    /** If the actor initiating the activity is a user, this property indicates their identification information including their id, displayName, and userPrincipalName. */
    private _user?: UserIdentity | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the app property value. If the actor initiating the activity is an app, this property indicates all its identification information including appId, displayName, servicePrincipalId, and servicePrincipalName.
     * @returns a AppIdentityInterface
     */
    public get app() {
        return this._app;
    };
    /**
     * Sets the app property value. If the actor initiating the activity is an app, this property indicates all its identification information including appId, displayName, servicePrincipalId, and servicePrincipalName.
     * @param value Value to set for the app property.
     */
    public set app(value: AppIdentity | undefined) {
        if(value) {
            this._app = value instanceof AppIdentityImpl? value : new AppIdentityImpl(value);
        }
    };
    /**
     * Instantiates a new auditActivityInitiator and sets the default values.
     * @param auditActivityInitiatorParameterValue 
     */
    public constructor(auditActivityInitiatorParameterValue?: AuditActivityInitiator | undefined) {
        this._additionalData = auditActivityInitiatorParameterValue?.additionalData ? auditActivityInitiatorParameterValue?.additionalData! : {};
        this._app = auditActivityInitiatorParameterValue?.app;
        this._user = auditActivityInitiatorParameterValue?.user;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "app": n => { this.app = n.getObjectValue<AppIdentityImpl>(createAppIdentityFromDiscriminatorValue); },
            "user": n => { this.user = n.getObjectValue<UserIdentityImpl>(createUserIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.app){
            writer.writeObjectValue<AppIdentityImpl>("app", (!this.app || this.app instanceof AppIdentityImpl? this.app : new AppIdentityImpl(this.app)));
        }
        if(this.user){
            writer.writeObjectValue<UserIdentityImpl>("user", (!this.user || this.user instanceof UserIdentityImpl? this.user : new UserIdentityImpl(this.user)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the user property value. If the actor initiating the activity is a user, this property indicates their identification information including their id, displayName, and userPrincipalName.
     * @returns a UserIdentityInterface
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. If the actor initiating the activity is a user, this property indicates their identification information including their id, displayName, and userPrincipalName.
     * @param value Value to set for the user property.
     */
    public set user(value: UserIdentity | undefined) {
        if(value) {
            this._user = value instanceof UserIdentityImpl? value : new UserIdentityImpl(value);
        }
    };
}
