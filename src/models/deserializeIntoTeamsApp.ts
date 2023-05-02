import {createTeamsAppDefinitionFromDiscriminatorValue} from './createTeamsAppDefinitionFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeTeamsAppDefinition} from './serializeTeamsAppDefinition';
import {TeamsApp} from './teamsApp';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppDistributionMethod} from './teamsAppDistributionMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsApp(teamsApp: TeamsApp | undefined = {} as TeamsApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsApp),
        "appDefinitions": n => { teamsApp.appDefinitions = n.getCollectionOfObjectValues<TeamsAppDefinition>(createTeamsAppDefinitionFromDiscriminatorValue); },
        "displayName": n => { teamsApp.displayName = n.getStringValue(); },
        "distributionMethod": n => { teamsApp.distributionMethod = n.getEnumValue<TeamsAppDistributionMethod>(TeamsAppDistributionMethod); },
        "externalId": n => { teamsApp.externalId = n.getStringValue(); },
    }
}
