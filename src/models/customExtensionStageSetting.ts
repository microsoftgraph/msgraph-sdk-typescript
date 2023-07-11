import {AccessPackageCustomExtensionStage} from './accessPackageCustomExtensionStage';
import {CustomCalloutExtension} from './customCalloutExtension';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomExtensionStageSetting extends Entity, Parsable {
    /**
     * The customExtension property
     */
    customExtension?: CustomCalloutExtension | undefined;
    /**
     * The stage property
     */
    stage?: AccessPackageCustomExtensionStage | undefined;
}
