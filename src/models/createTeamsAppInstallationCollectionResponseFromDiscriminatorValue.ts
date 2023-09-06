import { deserializeIntoTeamsAppInstallationCollectionResponse } from './deserializeIntoTeamsAppInstallationCollectionResponse';
import { type TeamsAppInstallationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAppInstallationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppInstallationCollectionResponse;
}
