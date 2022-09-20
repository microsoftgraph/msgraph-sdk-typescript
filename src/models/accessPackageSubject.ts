import {AccessPackageSubjectType} from './accessPackageSubjectType';
import {createConnectedOrganizationFromDiscriminatorValue} from './createConnectedOrganizationFromDiscriminatorValue';
import {ConnectedOrganization, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageSubject extends Entity implements Parsable {
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
     * @returns a connectedOrganization
     */
    public get connectedOrganization() {
        return this._connectedOrganization;
    };
    /**
     * Sets the connectedOrganization property value. The connected organization of the subject. Read-only. Nullable.
     * @param value Value to set for the connectedOrganization property.
     */
    public set connectedOrganization(value: ConnectedOrganization | undefined) {
        this._connectedOrganization = value;
    };
    /**
     * Instantiates a new accessPackageSubject and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.accessPackageSubject";
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
        this._displayName = value;
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
        this._email = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "connectedOrganization": n => { this.connectedOrganization = n.getObjectValue<ConnectedOrganization>(createConnectedOrganizationFromDiscriminatorValue); },
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
        this._objectId = value;
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
        this._onPremisesSecurityIdentifier = value;
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
        this._principalName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ConnectedOrganization>("connectedOrganization", this.connectedOrganization);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("email", this.email);
        writer.writeStringValue("objectId", this.objectId);
        writer.writeStringValue("onPremisesSecurityIdentifier", this.onPremisesSecurityIdentifier);
        writer.writeStringValue("principalName", this.principalName);
        writer.writeEnumValue<AccessPackageSubjectType>("subjectType", this.subjectType);
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
        this._subjectType = value;
    };
}
