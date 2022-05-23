import {Entity} from './entity';
import {TeamsApp} from './teamsApp';

export interface AppCatalogs extends Entity{
    /** The teamsApps property */
    teamsApps?:TeamsApp[] | undefined;
}
