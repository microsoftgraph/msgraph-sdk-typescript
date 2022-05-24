import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createOnPremisesProvisioningErrorFromDiscriminatorValue} from './createOnPremisesProvisioningErrorFromDiscriminatorValue';
import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {createPhysicalOfficeAddressFromDiscriminatorValue} from './createPhysicalOfficeAddressFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {DirectoryObjectImpl, OnPremisesProvisioningErrorImpl, PhoneImpl, PhysicalOfficeAddressImpl} from './index';
import {OnPremisesProvisioningError} from './onPremisesProvisioningError';
import {OrgContact} from './orgContact';
import {Phone} from './phone';
import {PhysicalOfficeAddress} from './physicalOfficeAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of orgContact entities. */
export class OrgContactImpl extends DirectoryObjectImpl implements OrgContact, Parsable {
    /** Postal addresses for this organizational contact. For now a contact can only have one physical address. */
    public addresses?: PhysicalOfficeAddress[] | undefined;
    /** Name of the company that this organizational contact belong to. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public companyName?: string | undefined;
    /** The name for the department in which the contact works. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public department?: string | undefined;
    /** The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand. */
    public directReports?: DirectoryObject[] | undefined;
    /** Display name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    public displayName?: string | undefined;
    /** First name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public givenName?: string | undefined;
    /** Job title for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public jobTitle?: string | undefined;
    /** The SMTP address for the contact, for example, 'jeff@contoso.onmicrosoft.com'. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public mail?: string | undefined;
    /** Email alias (portion of email address pre-pending the @ symbol) for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    public mailNickname?: string | undefined;
    /** The user or contact that is this contact's manager. Read-only. Supports $expand. */
    public manager?: DirectoryObject | undefined;
    /** Groups that this contact is a member of. Read-only. Nullable. Supports $expand. */
    public memberOf?: DirectoryObject[] | undefined;
    /** Date and time when this organizational contact was last synchronized from on-premises AD. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, not, ge, le, in). */
    public onPremisesLastSyncDateTime?: Date | undefined;
    /** List of any synchronization provisioning errors for this organizational contact. Supports $filter (eq, not). */
    public onPremisesProvisioningErrors?: OnPremisesProvisioningError[] | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced and now mastered in Exchange; null if this object has never been synced from an on-premises directory (default).  Supports $filter (eq, ne, not, in, and eq on null values). */
    public onPremisesSyncEnabled?: boolean | undefined;
    /** List of phones for this organizational contact. Phone types can be mobile, business, and businessFax. Only one of each type can ever be present in the collection. Supports $filter (eq, ne, not, in). */
    public phones?: Phone[] | undefined;
    /** For example: 'SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com'. The any operator is required for filter expressions on multi-valued properties. Supports $filter (eq, not, ge, le, startsWith, and counting empty collections). */
    public proxyAddresses?: string[] | undefined;
    /** Last name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values) */
    public surname?: string | undefined;
    /** The transitiveMemberOf property */
    public transitiveMemberOf?: DirectoryObject[] | undefined;
    /**
     * Instantiates a new orgContact and sets the default values.
     * @param orgContactParameterValue 
     */
    public constructor(orgContactParameterValue?: OrgContact | undefined) {
        super();
        this.addresses = orgContactParameterValue?.addresses ;
        this.companyName = orgContactParameterValue?.companyName ;
        this.department = orgContactParameterValue?.department ;
        this.directReports = orgContactParameterValue?.directReports ;
        this.displayName = orgContactParameterValue?.displayName ;
        this.givenName = orgContactParameterValue?.givenName ;
        this.jobTitle = orgContactParameterValue?.jobTitle ;
        this.mail = orgContactParameterValue?.mail ;
        this.mailNickname = orgContactParameterValue?.mailNickname ;
        this.manager = orgContactParameterValue?.manager ;
        this.memberOf = orgContactParameterValue?.memberOf ;
        this.onPremisesLastSyncDateTime = orgContactParameterValue?.onPremisesLastSyncDateTime ;
        this.onPremisesProvisioningErrors = orgContactParameterValue?.onPremisesProvisioningErrors ;
        this.onPremisesSyncEnabled = orgContactParameterValue?.onPremisesSyncEnabled ;
        this.phones = orgContactParameterValue?.phones ;
        this.proxyAddresses = orgContactParameterValue?.proxyAddresses ;
        this.surname = orgContactParameterValue?.surname ;
        this.transitiveMemberOf = orgContactParameterValue?.transitiveMemberOf ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "addresses": n => { this.addresses = n.getCollectionOfObjectValues<PhysicalOfficeAddressImpl>(createPhysicalOfficeAddressFromDiscriminatorValue); },
            "companyName": n => { this.companyName = n.getStringValue(); },
            "department": n => { this.department = n.getStringValue(); },
            "directReports": n => { this.directReports = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "givenName": n => { this.givenName = n.getStringValue(); },
            "jobTitle": n => { this.jobTitle = n.getStringValue(); },
            "mail": n => { this.mail = n.getStringValue(); },
            "mailNickname": n => { this.mailNickname = n.getStringValue(); },
            "manager": n => { this.manager = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "memberOf": n => { this.memberOf = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "onPremisesLastSyncDateTime": n => { this.onPremisesLastSyncDateTime = n.getDateValue(); },
            "onPremisesProvisioningErrors": n => { this.onPremisesProvisioningErrors = n.getCollectionOfObjectValues<OnPremisesProvisioningErrorImpl>(createOnPremisesProvisioningErrorFromDiscriminatorValue); },
            "onPremisesSyncEnabled": n => { this.onPremisesSyncEnabled = n.getBooleanValue(); },
            "phones": n => { this.phones = n.getCollectionOfObjectValues<PhoneImpl>(createPhoneFromDiscriminatorValue); },
            "proxyAddresses": n => { this.proxyAddresses = n.getCollectionOfPrimitiveValues<string>(); },
            "surname": n => { this.surname = n.getStringValue(); },
            "transitiveMemberOf": n => { this.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.addresses && this.addresses.length != 0){        const addressesArrValue: PhysicalOfficeAddressImpl[] = []; this.addresses?.forEach(element => {addressesArrValue.push(new PhysicalOfficeAddressImpl(element));});
        writer.writeCollectionOfObjectValues<PhysicalOfficeAddressImpl>("addresses", addressesArrValue);
        }
        if(this.companyName){
        writer.writeStringValue("companyName", this.companyName);
        }
        if(this.department){
        writer.writeStringValue("department", this.department);
        }
        if(this.directReports && this.directReports.length != 0){        const directReportsArrValue: DirectoryObjectImpl[] = []; this.directReports?.forEach(element => {directReportsArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("directReports", directReportsArrValue);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.givenName){
        writer.writeStringValue("givenName", this.givenName);
        }
        if(this.jobTitle){
        writer.writeStringValue("jobTitle", this.jobTitle);
        }
        if(this.mail){
        writer.writeStringValue("mail", this.mail);
        }
        if(this.mailNickname){
        writer.writeStringValue("mailNickname", this.mailNickname);
        }
        if(this.manager){
        writer.writeObjectValue<DirectoryObjectImpl>("manager", new DirectoryObjectImpl(this.manager));
        }
        if(this.memberOf && this.memberOf.length != 0){        const memberOfArrValue: DirectoryObjectImpl[] = []; this.memberOf?.forEach(element => {memberOfArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("memberOf", memberOfArrValue);
        }
        if(this.onPremisesLastSyncDateTime){
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        }
        if(this.onPremisesProvisioningErrors && this.onPremisesProvisioningErrors.length != 0){        const onPremisesProvisioningErrorsArrValue: OnPremisesProvisioningErrorImpl[] = []; this.onPremisesProvisioningErrors?.forEach(element => {onPremisesProvisioningErrorsArrValue.push(new OnPremisesProvisioningErrorImpl(element));});
        writer.writeCollectionOfObjectValues<OnPremisesProvisioningErrorImpl>("onPremisesProvisioningErrors", onPremisesProvisioningErrorsArrValue);
        }
        if(this.onPremisesSyncEnabled){
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        }
        if(this.phones && this.phones.length != 0){        const phonesArrValue: PhoneImpl[] = []; this.phones?.forEach(element => {phonesArrValue.push(new PhoneImpl(element));});
        writer.writeCollectionOfObjectValues<PhoneImpl>("phones", phonesArrValue);
        }
        if(this.proxyAddresses){
        writer.writeCollectionOfPrimitiveValues<string>("proxyAddresses", this.proxyAddresses);
        }
        if(this.surname){
        writer.writeStringValue("surname", this.surname);
        }
        if(this.transitiveMemberOf && this.transitiveMemberOf.length != 0){        const transitiveMemberOfArrValue: DirectoryObjectImpl[] = []; this.transitiveMemberOf?.forEach(element => {transitiveMemberOfArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("transitiveMemberOf", transitiveMemberOfArrValue);
        }
    };
}
