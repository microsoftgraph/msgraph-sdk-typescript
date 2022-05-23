import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createDomainDnsRecordFromDiscriminatorValue} from './createDomainDnsRecordFromDiscriminatorValue';
import {createDomainStateFromDiscriminatorValue} from './createDomainStateFromDiscriminatorValue';
import {createInternalDomainFederationFromDiscriminatorValue} from './createInternalDomainFederationFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {Domain} from './domain';
import {DomainDnsRecord} from './domainDnsRecord';
import {DomainState} from './domainState';
import {DirectoryObjectImpl, DomainDnsRecordImpl, DomainStateImpl, EntityImpl, InternalDomainFederationImpl} from './index';
import {InternalDomainFederation} from './internalDomainFederation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of domain entities. */
export class DomainImpl extends EntityImpl implements Domain, Parsable {
    /** Indicates the configured authentication type for the domain. The value is either Managed or Federated. Managed indicates a cloud managed domain where Azure AD performs user authentication. Federated indicates authentication is federated with an identity provider such as the tenant's on-premises Active Directory via Active Directory Federation Services. This property is read-only and is not nullable. */
    public authenticationType?: string | undefined;
    /** This property is always null except when the verify action is used. When the verify action is used, a domain entity is returned in the response. The availabilityStatus property of the domain entity in the response is either AvailableImmediately or EmailVerifiedDomainTakeoverScheduled. */
    public availabilityStatus?: string | undefined;
    /** The objects such as users and groups that reference the domain ID. Read-only, Nullable. Supports $expand and $filter by the OData type of objects returned. For example /domains/{domainId}/domainNameReferences/microsoft.graph.user and /domains/{domainId}/domainNameReferences/microsoft.graph.group. */
    public domainNameReferences?: DirectoryObject[] | undefined;
    /** Domain settings configured by customer when federated with Azure AD. Supports $expand. */
    public federationConfiguration?: InternalDomainFederation[] | undefined;
    /** The value of the property is false if the DNS record management of the domain has been delegated to Microsoft 365. Otherwise, the value is true. Not nullable */
    public isAdminManaged?: boolean | undefined;
    /** true if this is the default domain that is used for user creation. There is only one default domain per company. Not nullable */
    public isDefault?: boolean | undefined;
    /** true if this is the initial domain created by Microsoft Online Services (companyname.onmicrosoft.com). There is only one initial domain per company. Not nullable */
    public isInitial?: boolean | undefined;
    /** true if the domain is a verified root domain. Otherwise, false if the domain is a subdomain or unverified. Not nullable */
    public isRoot?: boolean | undefined;
    /** true if the domain has completed domain ownership verification. Not nullable */
    public isVerified?: boolean | undefined;
    /** The manufacturer property */
    public manufacturer?: string | undefined;
    /** The model property */
    public model?: string | undefined;
    /** Specifies the number of days before a user receives notification that their password will expire. If the property is not set, a default value of 14 days will be used. */
    public passwordNotificationWindowInDays?: number | undefined;
    /** Specifies the length of time that a password is valid before it must be changed. If the property is not set, a default value of 90 days will be used. */
    public passwordValidityPeriodInDays?: number | undefined;
    /** DNS records the customer adds to the DNS zone file of the domain before the domain can be used by Microsoft Online services. Read-only, Nullable. Supports $expand. */
    public serviceConfigurationRecords?: DomainDnsRecord[] | undefined;
    /** Status of asynchronous operations scheduled for the domain. */
    public state?: DomainState | undefined;
    /** The capabilities assigned to the domain. Can include 0, 1 or more of following values: Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline,SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune. The values which you can add/remove using Graph API include: Email, OfficeCommunicationsOnline, Yammer. Not nullable. */
    public supportedServices?: string[] | undefined;
    /** DNS records that the customer adds to the DNS zone file of the domain before the customer can complete domain ownership verification with Azure AD. Read-only, Nullable. Supports $expand. */
    public verificationDnsRecords?: DomainDnsRecord[] | undefined;
    /**
     * Instantiates a new domain and sets the default values.
     * @param domainParameterValue 
     */
    public constructor(domainParameterValue?: Domain | undefined) {
        super();
        this.authenticationType = domainParameterValue?.authenticationType ;
        this.availabilityStatus = domainParameterValue?.availabilityStatus ;
        this.domainNameReferences = domainParameterValue?.domainNameReferences ;
        this.federationConfiguration = domainParameterValue?.federationConfiguration ;
        this.isAdminManaged = domainParameterValue?.isAdminManaged ;
        this.isDefault = domainParameterValue?.isDefault ;
        this.isInitial = domainParameterValue?.isInitial ;
        this.isRoot = domainParameterValue?.isRoot ;
        this.isVerified = domainParameterValue?.isVerified ;
        this.manufacturer = domainParameterValue?.manufacturer ;
        this.model = domainParameterValue?.model ;
        this.passwordNotificationWindowInDays = domainParameterValue?.passwordNotificationWindowInDays ;
        this.passwordValidityPeriodInDays = domainParameterValue?.passwordValidityPeriodInDays ;
        this.serviceConfigurationRecords = domainParameterValue?.serviceConfigurationRecords ;
        this.state = domainParameterValue?.state ;
        this.supportedServices = domainParameterValue?.supportedServices ;
        this.verificationDnsRecords = domainParameterValue?.verificationDnsRecords ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "authenticationType": n => { this.authenticationType = n.getStringValue(); },
            "availabilityStatus": n => { this.availabilityStatus = n.getStringValue(); },
            "domainNameReferences": n => { this.domainNameReferences = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "federationConfiguration": n => { this.federationConfiguration = n.getCollectionOfObjectValues<InternalDomainFederationImpl>(createInternalDomainFederationFromDiscriminatorValue); },
            "isAdminManaged": n => { this.isAdminManaged = n.getBooleanValue(); },
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "isInitial": n => { this.isInitial = n.getBooleanValue(); },
            "isRoot": n => { this.isRoot = n.getBooleanValue(); },
            "isVerified": n => { this.isVerified = n.getBooleanValue(); },
            "manufacturer": n => { this.manufacturer = n.getStringValue(); },
            "model": n => { this.model = n.getStringValue(); },
            "passwordNotificationWindowInDays": n => { this.passwordNotificationWindowInDays = n.getNumberValue(); },
            "passwordValidityPeriodInDays": n => { this.passwordValidityPeriodInDays = n.getNumberValue(); },
            "serviceConfigurationRecords": n => { this.serviceConfigurationRecords = n.getCollectionOfObjectValues<DomainDnsRecordImpl>(createDomainDnsRecordFromDiscriminatorValue); },
            "state": n => { this.state = n.getObjectValue<DomainStateImpl>(createDomainStateFromDiscriminatorValue); },
            "supportedServices": n => { this.supportedServices = n.getCollectionOfPrimitiveValues<string>(); },
            "verificationDnsRecords": n => { this.verificationDnsRecords = n.getCollectionOfObjectValues<DomainDnsRecordImpl>(createDomainDnsRecordFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.authenticationType){
        writer.writeStringValue("authenticationType", this.authenticationType);
        }
        if(this.availabilityStatus){
        writer.writeStringValue("availabilityStatus", this.availabilityStatus);
        }
        if(this.domainNameReferences && this.domainNameReferences.length != 0){        const domainNameReferencesArrValue: DirectoryObjectImpl[] = []; this.domainNameReferences?.forEach(element => {domainNameReferencesArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("domainNameReferences", domainNameReferencesArrValue);
        }
        if(this.federationConfiguration && this.federationConfiguration.length != 0){        const federationConfigurationArrValue: InternalDomainFederationImpl[] = []; this.federationConfiguration?.forEach(element => {federationConfigurationArrValue.push(new InternalDomainFederationImpl(element));});
        writer.writeCollectionOfObjectValues<InternalDomainFederationImpl>("federationConfiguration", federationConfigurationArrValue);
        }
        if(this.isAdminManaged){
        writer.writeBooleanValue("isAdminManaged", this.isAdminManaged);
        }
        if(this.isDefault){
        writer.writeBooleanValue("isDefault", this.isDefault);
        }
        if(this.isInitial){
        writer.writeBooleanValue("isInitial", this.isInitial);
        }
        if(this.isRoot){
        writer.writeBooleanValue("isRoot", this.isRoot);
        }
        if(this.isVerified){
        writer.writeBooleanValue("isVerified", this.isVerified);
        }
        if(this.manufacturer){
        writer.writeStringValue("manufacturer", this.manufacturer);
        }
        if(this.model){
        writer.writeStringValue("model", this.model);
        }
        if(this.passwordNotificationWindowInDays){
        writer.writeNumberValue("passwordNotificationWindowInDays", this.passwordNotificationWindowInDays);
        }
        if(this.passwordValidityPeriodInDays){
        writer.writeNumberValue("passwordValidityPeriodInDays", this.passwordValidityPeriodInDays);
        }
        if(this.serviceConfigurationRecords && this.serviceConfigurationRecords.length != 0){        const serviceConfigurationRecordsArrValue: DomainDnsRecordImpl[] = []; this.serviceConfigurationRecords?.forEach(element => {serviceConfigurationRecordsArrValue.push(new DomainDnsRecordImpl(element));});
        writer.writeCollectionOfObjectValues<DomainDnsRecordImpl>("serviceConfigurationRecords", serviceConfigurationRecordsArrValue);
        }
        if(this.state){
        writer.writeObjectValue<DomainStateImpl>("state", new DomainStateImpl(this.state));
        }
        if(this.supportedServices){
        writer.writeCollectionOfPrimitiveValues<string>("supportedServices", this.supportedServices);
        }
        if(this.verificationDnsRecords && this.verificationDnsRecords.length != 0){        const verificationDnsRecordsArrValue: DomainDnsRecordImpl[] = []; this.verificationDnsRecords?.forEach(element => {verificationDnsRecordsArrValue.push(new DomainDnsRecordImpl(element));});
        writer.writeCollectionOfObjectValues<DomainDnsRecordImpl>("verificationDnsRecords", verificationDnsRecordsArrValue);
        }
    };
}
