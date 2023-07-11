import {Entity} from './entity';
import {TeamsApp} from './teamsApp';
import {TeamsTabConfiguration} from './teamsTabConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsTab extends Entity, Parsable {
    /**
     * Container for custom settings applied to a tab. The tab is considered configured only once this property is set.
     */
    configuration?: TeamsTabConfiguration | undefined;
    /**
     * Name of the tab.
     */
    displayName?: string | undefined;
    /**
     * The application that is linked to the tab. This cannot be changed after tab creation.
     */
    teamsApp?: TeamsApp | undefined;
    /**
     * Deep link URL of the tab instance. Read only.
     */
    webUrl?: string | undefined;
}
