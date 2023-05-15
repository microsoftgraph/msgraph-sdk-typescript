import {deserializeIntoTeamsAppDefinitionCollectionResponse} from './deserializeIntoTeamsAppDefinitionCollectionResponse';
import {TeamsAppDefinitionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppDefinitionCollectionResponse;
}
