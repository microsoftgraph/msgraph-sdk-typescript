import {AppIdentity} from './appIdentity';
import {AuditActivityInitiator} from './auditActivityInitiator';
import {createAppIdentityFromDiscriminatorValue} from './createAppIdentityFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {AppIdentityImpl, UserIdentityImpl} from './index';
import {UserIdentity} from './userIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuditActivityInitiatorImpl implements AdditionalDataHolder, AuditActivityInitiator, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** If the actor initiating the activity is an app, this property indicates all its identification information including appId, displayName, servicePrincipalId, and servicePrincipalName. */
    public app?: AppIdentity | undefined;
    /** If the actor initiating the activity is a user, this property indicates their identification information including their id, displayName, and userPrincipalName. */
    public user?: UserIdentity | undefined;
    /**
     * Instantiates a new auditActivityInitiator and sets the default values.
     * @param auditActivityInitiatorParameterValue 
     */
    public constructor(auditActivityInitiatorParameterValue?: AuditActivityInitiator | undefined) {
        this.additionalData = auditActivityInitiatorParameterValue?.additionalData ? auditActivityInitiatorParameterValue?.additionalData! : {}
        this.app = auditActivityInitiatorParameterValue?.app ;
        this.user = auditActivityInitiatorParameterValue?.user ;
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
        writer.writeObjectValue<AppIdentityImpl>("app", new AppIdentityImpl(this.app));
        }
        if(this.user){
        writer.writeObjectValue<UserIdentityImpl>("user", new UserIdentityImpl(this.user));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
