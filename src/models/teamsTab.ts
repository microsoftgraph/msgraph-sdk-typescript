import {Entity} from './entity';
import {TeamsApp} from './teamsApp';
import {TeamsTabConfiguration} from './teamsTabConfiguration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsTab extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Container for custom settings applied to a tab. The tab is considered configured only once this property is set. */
    configuration?: TeamsTabConfiguration | undefined;
    /** Name of the tab. */
    displayName?: string | undefined;
    /** The application that is linked to the tab. */
    teamsApp?: TeamsApp | undefined;
    /** Deep link URL of the tab instance. Read only. */
    webUrl?: string | undefined;
}
