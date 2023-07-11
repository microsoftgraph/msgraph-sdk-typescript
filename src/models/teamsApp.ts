import {Entity} from './entity';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppDistributionMethod} from './teamsAppDistributionMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsApp extends Entity, Parsable {
    /**
     * The details for each version of the app.
     */
    appDefinitions?: TeamsAppDefinition[] | undefined;
    /**
     * The name of the catalog app provided by the app developer in the Microsoft Teams zip app package.
     */
    displayName?: string | undefined;
    /**
     * The method of distribution for the app. Read-only.
     */
    distributionMethod?: TeamsAppDistributionMethod | undefined;
    /**
     * The ID of the catalog provided by the app developer in the Microsoft Teams zip app package.
     */
    externalId?: string | undefined;
}
