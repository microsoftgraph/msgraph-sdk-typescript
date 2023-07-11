import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageRequestState} from './accessPackageRequestState';
import {AccessPackageRequestType} from './accessPackageRequestType';
import {AccessPackageResource} from './accessPackageResource';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceRequest extends Entity, Parsable {
    /**
     * The catalog property
     */
    catalog?: AccessPackageCatalog | undefined;
    /**
     * The createdDateTime property
     */
    createdDateTime?: Date | undefined;
    /**
     * The requestType property
     */
    requestType?: AccessPackageRequestType | undefined;
    /**
     * The resource property
     */
    resource?: AccessPackageResource | undefined;
    /**
     * The state property
     */
    state?: AccessPackageRequestState | undefined;
}
