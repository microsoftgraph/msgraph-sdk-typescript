import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createTeamsAppAuthorizationFromDiscriminatorValue} from './createTeamsAppAuthorizationFromDiscriminatorValue';
import {createTeamworkBotFromDiscriminatorValue} from './createTeamworkBotFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamsAppAuthorization} from './serializeTeamsAppAuthorization';
import {serializeTeamworkBot} from './serializeTeamworkBot';
import type {TeamsAppAuthorization} from './teamsAppAuthorization';
import type {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppPublishingState} from './teamsAppPublishingState';
import type {TeamworkBot} from './teamworkBot';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppDefinition(teamsAppDefinition: TeamsAppDefinition | undefined = {} as TeamsAppDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsAppDefinition),
        "authorization": n => { teamsAppDefinition.authorization = n.getObjectValue<TeamsAppAuthorization>(createTeamsAppAuthorizationFromDiscriminatorValue); },
        "bot": n => { teamsAppDefinition.bot = n.getObjectValue<TeamworkBot>(createTeamworkBotFromDiscriminatorValue); },
        "createdBy": n => { teamsAppDefinition.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "description": n => { teamsAppDefinition.description = n.getStringValue(); },
        "displayName": n => { teamsAppDefinition.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { teamsAppDefinition.lastModifiedDateTime = n.getDateValue(); },
        "publishingState": n => { teamsAppDefinition.publishingState = n.getEnumValue<TeamsAppPublishingState>(TeamsAppPublishingState); },
        "shortDescription": n => { teamsAppDefinition.shortDescription = n.getStringValue(); },
        "teamsAppId": n => { teamsAppDefinition.teamsAppId = n.getStringValue(); },
        "version": n => { teamsAppDefinition.version = n.getStringValue(); },
    }
}
