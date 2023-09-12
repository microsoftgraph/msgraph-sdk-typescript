import { deserializeIntoTeamsTemplateCollectionResponse } from './deserializeIntoTeamsTemplateCollectionResponse';
import { type TeamsTemplateCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsTemplateCollectionResponse;
}
