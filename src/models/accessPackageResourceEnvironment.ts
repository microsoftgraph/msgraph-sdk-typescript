import {AccessPackageResource} from './accessPackageResource';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageResourceEnvironment extends Entity, Parsable {
    /**
     * The createdDateTime property
     */
    createdDateTime?: Date | undefined;
    /**
     * The description property
     */
    description?: string | undefined;
    /**
     * The displayName property
     */
    displayName?: string | undefined;
    /**
     * The isDefaultEnvironment property
     */
    isDefaultEnvironment?: boolean | undefined;
    /**
     * The modifiedDateTime property
     */
    modifiedDateTime?: Date | undefined;
    /**
     * The originId property
     */
    originId?: string | undefined;
    /**
     * The originSystem property
     */
    originSystem?: string | undefined;
    /**
     * The resources property
     */
    resources?: AccessPackageResource[] | undefined;
}
