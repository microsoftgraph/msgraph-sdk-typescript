import type {Entity} from './entity';
import type {TeamsApp} from './teamsApp';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AppCatalogs extends Entity, Parsable {
    /**
     * The teamsApps property
     */
    teamsApps?: TeamsApp[] | undefined;
}
