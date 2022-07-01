import {ConnectedOrganization} from './connectedOrganization';
import {ConnectedOrganizationState} from './connectedOrganizationState';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createIdentitySourceFromDiscriminatorValue} from './createIdentitySourceFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {IdentitySource} from './identitySource';
import {DirectoryObjectImpl, EntityImpl, IdentitySourceImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class ConnectedOrganizationImpl extends EntityImpl implements ConnectedOrganization {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The description of the connected organization. */
    private _description?: string | undefined;
    /** The display name of the connected organization. Supports $filter (eq). */
    private _displayName?: string | undefined;
    /** The externalSponsors property */
    private _externalSponsors?: DirectoryObject[] | undefined;
    /** The identity sources in this connected organization, one of azureActiveDirectoryTenant, crossCloudAzureActiveDirectoryTenant, domainIdentitySource or externalDomainFederation. Read-only. Nullable. Supports $select and $filter(eq). To filter by the derived types, you must declare the resource using its full OData cast, for example, $filter=identitySources/any(is:is/microsoft.graph.azureActiveDirectoryTenant/tenantId eq 'bcfdfff4-cbc3-43f2-9000-ba7b7515054f'). */
    private _identitySources?: IdentitySource[] | undefined;
    /** The internalSponsors property */
    private _internalSponsors?: DirectoryObject[] | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _modifiedDateTime?: Date | undefined;
    /** The state of a connected organization defines whether assignment policies with requestor scope type AllConfiguredConnectedOrganizationSubjects are applicable or not. Possible values are: configured, proposed. */
    private _state?: ConnectedOrganizationState | undefined;
    /**
     * Instantiates a new connectedOrganization and sets the default values.
     * @param connectedOrganizationParameterValue 
     */
    public constructor(connectedOrganizationParameterValue?: ConnectedOrganization | undefined) {
        super(connectedOrganizationParameterValue);
        this._createdDateTime = connectedOrganizationParameterValue?.createdDateTime;
        this._description = connectedOrganizationParameterValue?.description;
        this._displayName = connectedOrganizationParameterValue?.displayName;
        this._externalSponsors = connectedOrganizationParameterValue?.externalSponsors;
        this._identitySources = connectedOrganizationParameterValue?.identitySources;
        this._internalSponsors = connectedOrganizationParameterValue?.internalSponsors;
        this._modifiedDateTime = connectedOrganizationParameterValue?.modifiedDateTime;
        this._state = connectedOrganizationParameterValue?.state;
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the description property value. The description of the connected organization.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of the connected organization.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. The display name of the connected organization. Supports $filter (eq).
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the connected organization. Supports $filter (eq).
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the externalSponsors property value. The externalSponsors property
     * @returns a DirectoryObjectInterface
     */
    public get externalSponsors() {
        return this._externalSponsors;
    };
    /**
     * Sets the externalSponsors property value. The externalSponsors property
     * @param value Value to set for the externalSponsors property.
     */
    public set externalSponsors(value: DirectoryObject[] | undefined) {
        if(value) {
            const externalSponsorsArrValue: DirectoryObjectImpl[] = [];
            this.externalSponsors?.forEach(element => {
                externalSponsorsArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
            });
            this._externalSponsors = externalSponsorsArrValue;
        }
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
     * Gets the identitySources property value. The identity sources in this connected organization, one of azureActiveDirectoryTenant, crossCloudAzureActiveDirectoryTenant, domainIdentitySource or externalDomainFederation. Read-only. Nullable. Supports $select and $filter(eq). To filter by the derived types, you must declare the resource using its full OData cast, for example, $filter=identitySources/any(is:is/microsoft.graph.azureActiveDirectoryTenant/tenantId eq 'bcfdfff4-cbc3-43f2-9000-ba7b7515054f').
     * @returns a IdentitySourceInterface
     */
    public get identitySources() {
        return this._identitySources;
    };
    /**
     * Sets the identitySources property value. The identity sources in this connected organization, one of azureActiveDirectoryTenant, crossCloudAzureActiveDirectoryTenant, domainIdentitySource or externalDomainFederation. Read-only. Nullable. Supports $select and $filter(eq). To filter by the derived types, you must declare the resource using its full OData cast, for example, $filter=identitySources/any(is:is/microsoft.graph.azureActiveDirectoryTenant/tenantId eq 'bcfdfff4-cbc3-43f2-9000-ba7b7515054f').
     * @param value Value to set for the identitySources property.
     */
    public set identitySources(value: IdentitySource[] | undefined) {
        if(value) {
            const identitySourcesArrValue: IdentitySourceImpl[] = [];
            this.identitySources?.forEach(element => {
                identitySourcesArrValue.push((element instanceof IdentitySourceImpl? element as IdentitySourceImpl:new IdentitySourceImpl(element)));
            });
            this._identitySources = identitySourcesArrValue;
        }
    };
    /**
     * Gets the internalSponsors property value. The internalSponsors property
     * @returns a DirectoryObjectInterface
     */
    public get internalSponsors() {
        return this._internalSponsors;
    };
    /**
     * Sets the internalSponsors property value. The internalSponsors property
     * @param value Value to set for the internalSponsors property.
     */
    public set internalSponsors(value: DirectoryObject[] | undefined) {
        if(value) {
            const internalSponsorsArrValue: DirectoryObjectImpl[] = [];
            this.internalSponsors?.forEach(element => {
                internalSponsorsArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
            });
            this._internalSponsors = internalSponsorsArrValue;
        }
    };
    /**
     * Gets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get modifiedDateTime() {
        return this._modifiedDateTime;
    };
    /**
     * Sets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the modifiedDateTime property.
     */
    public set modifiedDateTime(value: Date | undefined) {
        if(value) {
            this._modifiedDateTime = value;
        }
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
        if(this.externalSponsors && this.externalSponsors.length != 0){        const externalSponsorsArrValue: DirectoryObjectImpl[] = [];
        this.externalSponsors?.forEach(element => {
            externalSponsorsArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("externalSponsors", externalSponsorsArrValue);
        }
        if(this.identitySources && this.identitySources.length != 0){        const identitySourcesArrValue: IdentitySourceImpl[] = [];
        this.identitySources?.forEach(element => {
            identitySourcesArrValue.push((element instanceof IdentitySourceImpl? element as IdentitySourceImpl:new IdentitySourceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IdentitySourceImpl>("identitySources", identitySourcesArrValue);
        }
        if(this.internalSponsors && this.internalSponsors.length != 0){        const internalSponsorsArrValue: DirectoryObjectImpl[] = [];
        this.internalSponsors?.forEach(element => {
            internalSponsorsArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("internalSponsors", internalSponsorsArrValue);
        }
        if(this.modifiedDateTime){
            writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        }
        if(this.state){
            writer.writeEnumValue<ConnectedOrganizationState>("state", this.state);
        }
    };
    /**
     * Gets the state property value. The state of a connected organization defines whether assignment policies with requestor scope type AllConfiguredConnectedOrganizationSubjects are applicable or not. Possible values are: configured, proposed.
     * @returns a connectedOrganizationState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state of a connected organization defines whether assignment policies with requestor scope type AllConfiguredConnectedOrganizationSubjects are applicable or not. Possible values are: configured, proposed.
     * @param value Value to set for the state property.
     */
    public set state(value: ConnectedOrganizationState | undefined) {
        if(value) {
            this._state = value;
        }
    };
}
