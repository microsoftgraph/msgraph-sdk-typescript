import {AccessPackageSubject} from './accessPackageSubject';
import {AccessPackageSubjectType} from './accessPackageSubjectType';
import {ConnectedOrganization} from './connectedOrganization';
import {createConnectedOrganizationFromDiscriminatorValue} from './createConnectedOrganizationFromDiscriminatorValue';
import {ConnectedOrganizationImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessPackageSubjectImpl extends EntityImpl implements AccessPackageSubject, Parsable {
    /** The connected organization of the subject. Read-only. Nullable. */
    public connectedOrganization?: ConnectedOrganization | undefined;
    /** The display name of the subject. */
    public displayName?: string | undefined;
    /** The email address of the subject. */
    public email?: string | undefined;
    /** The object identifier of the subject. null if the subject is not yet a user in the tenant. */
    public objectId?: string | undefined;
    /** A string representation of the principal's security identifier, if known, or null if the subject does not have a security identifier. */
    public onPremisesSecurityIdentifier?: string | undefined;
    /** The principal name, if known, of the subject. */
    public principalName?: string | undefined;
    /** The resource type of the subject. The possible values are: notSpecified, user, servicePrincipal, unknownFutureValue. */
    public subjectType?: AccessPackageSubjectType | undefined;
    /**
     * Instantiates a new accessPackageSubject and sets the default values.
     * @param accessPackageSubjectParameterValue 
     */
    public constructor(accessPackageSubjectParameterValue?: AccessPackageSubject | undefined) {
        super();
        this.connectedOrganization = accessPackageSubjectParameterValue?.connectedOrganization ;
        this.displayName = accessPackageSubjectParameterValue?.displayName ;
        this.email = accessPackageSubjectParameterValue?.email ;
        this.objectId = accessPackageSubjectParameterValue?.objectId ;
        this.onPremisesSecurityIdentifier = accessPackageSubjectParameterValue?.onPremisesSecurityIdentifier ;
        this.principalName = accessPackageSubjectParameterValue?.principalName ;
        this.subjectType = accessPackageSubjectParameterValue?.subjectType ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.connectedOrganization){
        writer.writeObjectValue<ConnectedOrganizationImpl>("connectedOrganization", new ConnectedOrganizationImpl(this.connectedOrganization));
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
}
