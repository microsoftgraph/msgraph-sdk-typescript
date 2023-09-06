import { deserializeIntoTeamsApp } from './deserializeIntoTeamsApp';
import { type TeamsApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsApp;
}
