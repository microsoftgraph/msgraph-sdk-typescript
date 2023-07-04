import {AlertEvidence} from './alertEvidence';
import {GoogleCloudLocationType} from './googleCloudLocationType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GoogleCloudResourceEvidence extends AlertEvidence, Parsable {
    /**
     * The zone or region where the resource is located.
     */
    location?: string | undefined;
    /**
     * The type of location. Possible values are: unknown, regional, zonal, global, unknownFutureValue.
     */
    locationType?: GoogleCloudLocationType | undefined;
    /**
     * The Google project ID as defined by the user.
     */
    projectId?: string | undefined;
    /**
     * The project number assigned by Google.
     */
    projectNumber?: number | undefined;
    /**
     * The name of the resource.
     */
    resourceName?: string | undefined;
    /**
     * The type of the resource.
     */
    resourceType?: string | undefined;
}
