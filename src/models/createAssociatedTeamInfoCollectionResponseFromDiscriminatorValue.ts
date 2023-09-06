import { deserializeIntoAssociatedTeamInfoCollectionResponse } from './deserializeIntoAssociatedTeamInfoCollectionResponse';
import { type AssociatedTeamInfoCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAssociatedTeamInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssociatedTeamInfoCollectionResponse;
}
