import type {AccessPackageResource} from './accessPackageResource';
import type {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceRole extends Entity, Parsable {
    /**
     * A description for the resource role.
     */
    description?: string | undefined;
    /**
     * The display name of the resource role such as the role defined by the application.
     */
    displayName?: string | undefined;
    /**
     * The unique identifier of the resource role in the origin system. For a SharePoint Online site, the originId will be the sequence number of the role in the site.
     */
    originId?: string | undefined;
    /**
     * The type of the resource in the origin system, such as SharePointOnline, AadApplication or AadGroup.
     */
    originSystem?: string | undefined;
    /**
     * The resource property
     */
    resource?: AccessPackageResource | undefined;
}
