import {Entity} from './entity';
import {TeamsApp} from './teamsApp';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AppCatalogs extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The teamsApps property */
    teamsApps?: TeamsApp[] | undefined;
}
