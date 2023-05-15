import {createTeamsAppInstallationFromDiscriminatorValue} from './createTeamsAppInstallationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTeamsAppInstallation} from './serializeTeamsAppInstallation';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {TeamsAppInstallationCollectionResponse} from './teamsAppInstallationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppInstallationCollectionResponse(teamsAppInstallationCollectionResponse: TeamsAppInstallationCollectionResponse | undefined = {} as TeamsAppInstallationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamsAppInstallationCollectionResponse),
        "value": n => { teamsAppInstallationCollectionResponse.value = n.getCollectionOfObjectValues<TeamsAppInstallation>(createTeamsAppInstallationFromDiscriminatorValue); },
    }
}
