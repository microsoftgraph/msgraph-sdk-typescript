import {ConnectedOrganization} from './connectedOrganization';
import {ConnectedOrganizationState} from './connectedOrganizationState';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createIdentitySourceFromDiscriminatorValue} from './createIdentitySourceFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {IdentitySource} from './identitySource';
import {DirectoryObjectImpl, EntityImpl, IdentitySourceImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class ConnectedOrganizationImpl extends EntityImpl implements ConnectedOrganization, Parsable {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public createdDateTime?: Date | undefined;
    /** The description of the connected organization. */
    public description?: string | undefined;
    /** The display name of the connected organization. Supports $filter (eq). */
    public displayName?: string | undefined;
    /** Nullable. */
    public externalSponsors?: DirectoryObject[] | undefined;
    /** The identity sources in this connected organization, one of azureActiveDirectoryTenant, domainIdentitySource or externalDomainFederation. Read-only. Nullable. Supports $select and $filter(eq). To filter by the derived types, you must declare the resource using its full OData cast, for example, $filter=identitySources/any(is:is/microsoft.graph.azureActiveDirectoryTenant/tenantId eq 'bcfdfff4-cbc3-43f2-9000-ba7b7515054f'). */
    public identitySources?: IdentitySource[] | undefined;
    /** Nullable. */
    public internalSponsors?: DirectoryObject[] | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public modifiedDateTime?: Date | undefined;
    /** The state of a connected organization defines whether assignment policies with requestor scope type AllConfiguredConnectedOrganizationSubjects are applicable or not. Possible values are: configured, proposed. */
    public state?: ConnectedOrganizationState | undefined;
    /**
     * Instantiates a new connectedOrganization and sets the default values.
     * @param connectedOrganizationParameterValue 
     */
    public constructor(connectedOrganizationParameterValue?: ConnectedOrganization | undefined) {
        super();
        this.createdDateTime = connectedOrganizationParameterValue?.createdDateTime ;
        this.description = connectedOrganizationParameterValue?.description ;
        this.displayName = connectedOrganizationParameterValue?.displayName ;
        this.externalSponsors = connectedOrganizationParameterValue?.externalSponsors ;
        this.identitySources = connectedOrganizationParameterValue?.identitySources ;
        this.internalSponsors = connectedOrganizationParameterValue?.internalSponsors ;
        this.modifiedDateTime = connectedOrganizationParameterValue?.modifiedDateTime ;
        this.state = connectedOrganizationParameterValue?.state ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "externalSponsors": n => { this.externalSponsors = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "identitySources": n => { this.identitySources = n.getCollectionOfObjectValues<IdentitySourceImpl>(createIdentitySourceFromDiscriminatorValue); },
            "internalSponsors": n => { this.internalSponsors = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "modifiedDateTime": n => { this.modifiedDateTime = n.getDateValue(); },
            "state": n => { this.state = n.getEnumValue<ConnectedOrganizationState>(ConnectedOrganizationState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.externalSponsors && this.externalSponsors.length != 0){        const externalSponsorsArrValue: DirectoryObjectImpl[] = []; this.externalSponsors?.forEach(element => {externalSponsorsArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("externalSponsors", externalSponsorsArrValue);
        }
        if(this.identitySources && this.identitySources.length != 0){        const identitySourcesArrValue: IdentitySourceImpl[] = []; this.identitySources?.forEach(element => {identitySourcesArrValue.push(new IdentitySourceImpl(element));});
        writer.writeCollectionOfObjectValues<IdentitySourceImpl>("identitySources", identitySourcesArrValue);
        }
        if(this.internalSponsors && this.internalSponsors.length != 0){        const internalSponsorsArrValue: DirectoryObjectImpl[] = []; this.internalSponsors?.forEach(element => {internalSponsorsArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("internalSponsors", internalSponsorsArrValue);
        }
        if(this.modifiedDateTime){
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        }
        if(this.state){
        writer.writeEnumValue<ConnectedOrganizationState>("state", this.state);
        }
    };
}
