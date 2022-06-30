import {AccessPackageSubject} from './accessPackageSubject';
import {AccessPackageSubjectType} from './accessPackageSubjectType';
import {ConnectedOrganization} from './connectedOrganization';
import {createConnectedOrganizationFromDiscriminatorValue} from './createConnectedOrganizationFromDiscriminatorValue';
import {ConnectedOrganizationImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessPackageSubjectImpl extends EntityImpl implements AccessPackageSubject {
    /** The connected organization of the subject. Read-only. Nullable. */
    private _connectedOrganization?: ConnectedOrganization | undefined;
    /** The display name of the subject. */
    private _displayName?: string | undefined;
    /** The email address of the subject. */
    private _email?: string | undefined;
    /** The object identifier of the subject. null if the subject is not yet a user in the tenant. */
    private _objectId?: string | undefined;
    /** A string representation of the principal's security identifier, if known, or null if the subject does not have a security identifier. */
    private _onPremisesSecurityIdentifier?: string | undefined;
    /** The principal name, if known, of the subject. */
    private _principalName?: string | undefined;
    /** The resource type of the subject. The possible values are: notSpecified, user, servicePrincipal, unknownFutureValue. */
    private _subjectType?: AccessPackageSubjectType | undefined;
    /**
     * Gets the connectedOrganization property value. The connected organization of the subject. Read-only. Nullable.
     * @returns a ConnectedOrganizationInterface
     */
    public get connectedOrganization() {
        return this._connectedOrganization;
    };
    /**
     * Sets the connectedOrganization property value. The connected organization of the subject. Read-only. Nullable.
     * @param value Value to set for the connectedOrganization property.
     */
    public set connectedOrganization(value: ConnectedOrganization | undefined) {
        if(value) {
            this._connectedOrganization = value instanceof ConnectedOrganizationImpl? value : new ConnectedOrganizationImpl(value);
        }
    };
    /**
     * Instantiates a new accessPackageSubject and sets the default values.
     * @param accessPackageSubjectParameterValue 
     */
    public constructor(accessPackageSubjectParameterValue?: AccessPackageSubject | undefined) {
        super(accessPackageSubjectParameterValue);
        this._connectedOrganization = accessPackageSubjectParameterValue?.connectedOrganization;
        this._displayName = accessPackageSubjectParameterValue?.displayName;
        this._email = accessPackageSubjectParameterValue?.email;
        this._objectId = accessPackageSubjectParameterValue?.objectId;
        this._onPremisesSecurityIdentifier = accessPackageSubjectParameterValue?.onPremisesSecurityIdentifier;
        this._principalName = accessPackageSubjectParameterValue?.principalName;
        this._subjectType = accessPackageSubjectParameterValue?.subjectType;
    };
    /**
     * Gets the displayName property value. The display name of the subject.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the subject.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the email property value. The email address of the subject.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Sets the email property value. The email address of the subject.
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        if(value) {
            this._email = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "connectedOrganization": n => { this.connectedOrganization = n.getObjectValue<ConnectedOrganizationImpl>(createConnectedOrganizationFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "email": n => { this.email = n.getStringValue(); },
            "objectId": n => { this.objectId = n.getStringValue(); },
            "onPremisesSecurityIdentifier": n => { this.onPremisesSecurityIdentifier = n.getStringValue(); },
            "principalName": n => { this.principalName = n.getStringValue(); },
            "subjectType": n => { this.subjectType = n.getEnumValue<AccessPackageSubjectType>(AccessPackageSubjectType); },
        };
    };
    /**
     * Gets the objectId property value. The object identifier of the subject. null if the subject is not yet a user in the tenant.
     * @returns a string
     */
    public get objectId() {
        return this._objectId;
    };
    /**
     * Sets the objectId property value. The object identifier of the subject. null if the subject is not yet a user in the tenant.
     * @param value Value to set for the objectId property.
     */
    public set objectId(value: string | undefined) {
        if(value) {
            this._objectId = value;
        }
    };
    /**
     * Gets the onPremisesSecurityIdentifier property value. A string representation of the principal's security identifier, if known, or null if the subject does not have a security identifier.
     * @returns a string
     */
    public get onPremisesSecurityIdentifier() {
        return this._onPremisesSecurityIdentifier;
    };
    /**
     * Sets the onPremisesSecurityIdentifier property value. A string representation of the principal's security identifier, if known, or null if the subject does not have a security identifier.
     * @param value Value to set for the onPremisesSecurityIdentifier property.
     */
    public set onPremisesSecurityIdentifier(value: string | undefined) {
        if(value) {
            this._onPremisesSecurityIdentifier = value;
        }
    };
    /**
     * Gets the principalName property value. The principal name, if known, of the subject.
     * @returns a string
     */
    public get principalName() {
        return this._principalName;
    };
    /**
     * Sets the principalName property value. The principal name, if known, of the subject.
     * @param value Value to set for the principalName property.
     */
    public set principalName(value: string | undefined) {
        if(value) {
            this._principalName = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.connectedOrganization){
            writer.writeObjectValue<ConnectedOrganizationImpl>("connectedOrganization", (!this.connectedOrganization || this.connectedOrganization instanceof ConnectedOrganizationImpl? this.connectedOrganization : new ConnectedOrganizationImpl(this.connectedOrganization)));
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.email){
            writer.writeStringValue("email", this.email);
        }
        if(this.objectId){
            writer.writeStringValue("objectId", this.objectId);
        }
        if(this.onPremisesSecurityIdentifier){
            writer.writeStringValue("onPremisesSecurityIdentifier", this.onPremisesSecurityIdentifier);
        }
        if(this.principalName){
            writer.writeStringValue("principalName", this.principalName);
        }
        if(this.subjectType){
            writer.writeEnumValue<AccessPackageSubjectType>("subjectType", this.subjectType);
        }
    };
    /**
     * Gets the subjectType property value. The resource type of the subject. The possible values are: notSpecified, user, servicePrincipal, unknownFutureValue.
     * @returns a accessPackageSubjectType
     */
    public get subjectType() {
        return this._subjectType;
    };
    /**
     * Sets the subjectType property value. The resource type of the subject. The possible values are: notSpecified, user, servicePrincipal, unknownFutureValue.
     * @param value Value to set for the subjectType property.
     */
    public set subjectType(value: AccessPackageSubjectType | undefined) {
        if(value) {
            this._subjectType = value;
        }
    };
}
