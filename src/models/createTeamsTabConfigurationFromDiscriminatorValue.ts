import { deserializeIntoTeamsTabConfiguration } from './deserializeIntoTeamsTabConfiguration';
import { type TeamsTabConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsTabConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsTabConfiguration;
}
