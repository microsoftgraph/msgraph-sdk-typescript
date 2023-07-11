import {ConnectedOrganizationState} from './connectedOrganizationState';
import {DirectoryObject} from './directoryObject';
import {Entity} from './entity';
import {IdentitySource} from './identitySource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConnectedOrganization extends Entity, Parsable {
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * The description of the connected organization.
     */
    description?: string | undefined;
    /**
     * The display name of the connected organization. Supports $filter (eq).
     */
    displayName?: string | undefined;
    /**
     * The externalSponsors property
     */
    externalSponsors?: DirectoryObject[] | undefined;
    /**
     * The identity sources in this connected organization, one of azureActiveDirectoryTenant, domainIdentitySource, externalDomainFederation or crossCloudAzureActiveDirectoryTenant. Nullable.
     */
    identitySources?: IdentitySource[] | undefined;
    /**
     * The internalSponsors property
     */
    internalSponsors?: DirectoryObject[] | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    modifiedDateTime?: Date | undefined;
    /**
     * The state of a connected organization defines whether assignment policies with requestor scope type AllConfiguredConnectedOrganizationSubjects are applicable or not.  The possible values are: configured, proposed, unknownFutureValue.
     */
    state?: ConnectedOrganizationState | undefined;
}
