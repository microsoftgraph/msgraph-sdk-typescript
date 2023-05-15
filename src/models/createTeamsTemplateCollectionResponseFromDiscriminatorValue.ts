import {deserializeIntoTeamsTemplateCollectionResponse} from './deserializeIntoTeamsTemplateCollectionResponse';
import {TeamsTemplateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsTemplateCollectionResponse;
}
