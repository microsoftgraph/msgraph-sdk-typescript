import {AccessPackageCustomExtensionStage} from './accessPackageCustomExtensionStage';
import type {CustomCalloutExtension} from './customCalloutExtension';
import type {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomExtensionStageSetting extends Entity, Parsable {
    /**
     * Indicates the custom workflow extension that will be executed at this stage. Nullable. Supports $expand.
     */
    customExtension?: CustomCalloutExtension | undefined;
    /**
     * The stage property
     */
    stage?: AccessPackageCustomExtensionStage | undefined;
}
