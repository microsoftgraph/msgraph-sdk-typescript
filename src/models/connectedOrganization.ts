import {ConnectedOrganizationState} from './connectedOrganizationState';
import {DirectoryObject} from './directoryObject';
import {Entity} from './entity';
import {IdentitySource} from './identitySource';

export interface ConnectedOrganization extends Entity{
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    createdDateTime?:Date | undefined;
    /** The description of the connected organization. */
    description?:string | undefined;
    /** The display name of the connected organization. Supports $filter (eq). */
    displayName?:string | undefined;
    /** Nullable. */
    externalSponsors?:DirectoryObject[] | undefined;
    /** The identity sources in this connected organization, one of azureActiveDirectoryTenant, domainIdentitySource or externalDomainFederation. Read-only. Nullable. Supports $select and $filter(eq). To filter by the derived types, you must declare the resource using its full OData cast, for example, $filter=identitySources/any(is:is/microsoft.graph.azureActiveDirectoryTenant/tenantId eq 'bcfdfff4-cbc3-43f2-9000-ba7b7515054f'). */
    identitySources?:IdentitySource[] | undefined;
    /** Nullable. */
    internalSponsors?:DirectoryObject[] | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    modifiedDateTime?:Date | undefined;
    /** The state of a connected organization defines whether assignment policies with requestor scope type AllConfiguredConnectedOrganizationSubjects are applicable or not. Possible values are: configured, proposed. */
    state?:ConnectedOrganizationState | undefined;
}
