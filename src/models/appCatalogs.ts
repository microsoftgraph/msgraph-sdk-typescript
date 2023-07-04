import {Entity} from './entity';
import {TeamsApp} from './teamsApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppCatalogs extends Entity, Parsable {
    /**
     * The teamsApps property
     */
    teamsApps?: TeamsApp[] | undefined;
}
