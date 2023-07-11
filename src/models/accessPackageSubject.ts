import {AccessPackageSubjectType} from './accessPackageSubjectType';
import {ConnectedOrganization} from './connectedOrganization';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageSubject extends Entity, Parsable {
    /**
     * The connected organization of the subject. Read-only. Nullable.
     */
    connectedOrganization?: ConnectedOrganization | undefined;
    /**
     * The display name of the subject.
     */
    displayName?: string | undefined;
    /**
     * The email address of the subject.
     */
    email?: string | undefined;
    /**
     * The object identifier of the subject. null if the subject is not yet a user in the tenant.
     */
    objectId?: string | undefined;
    /**
     * A string representation of the principal's security identifier, if known, or null if the subject does not have a security identifier.
     */
    onPremisesSecurityIdentifier?: string | undefined;
    /**
     * The principal name, if known, of the subject.
     */
    principalName?: string | undefined;
    /**
     * The resource type of the subject. The possible values are: notSpecified, user, servicePrincipal, unknownFutureValue.
     */
    subjectType?: AccessPackageSubjectType | undefined;
}
